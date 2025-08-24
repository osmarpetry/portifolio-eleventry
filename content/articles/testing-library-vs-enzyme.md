---
title: "Testing Library vs Enzyme"
date: 2025-01-15
tags:
  - '#react'
  - '#testing'
  - '#javascript'
description: "https://testing-playground.com/ it's a website I recommend you to check it out, like the name suggests it"
layout: post.njk
---

# Testing Library vs Enzyme

[https://testing-playground.com/](https://testing-playground.com/) it's a website I recommend you to check it out, like the name suggests it
[https://kentcdodds.com/blog/avoid-nesting-when-youre-testing?ck_subscriber_id=725001484](https://kentcdodds.com/blog/avoid-nesting-when-youre-testing?ck_subscriber_id=725001484) it's article I suggest to read to write best tests, everything releted to unit testing please check Kent blog after the documentation of your unit testing tool.  
  
## **Introduction**
I will just replicate here what we found on @testing-library home page because it's already a very awesome summary where I share the same thoughts:
Complete and straightforward testing utilities that encourage good testing practices. The more your tests resemble the way your software is used, the more confidence they can give you.
What are the straightforward points of the library proposal:  
Write maintainable code: Tests only break when your app breaks, not implementation details.  
Develop with Confidence: Interact with your app the same way as your users.  
Accessible by Default: Built-in selectors find elements the way users do to help you write inclusive code.  
  
The problem (code from: [https://blog.logrocket.com/enzyme-vs-react-testing-library-a-mindset-shift/](https://blog.logrocket.com/enzyme-vs-react-testing-library-a-mindset-shift/)):
```javascript
describe("RangeCounterA", () => {
  let component;
  beforeEach(() => {
    component = mount(<RangeCounterA />);
  });
  describe("when incrementing counter is allowed", () => {
    it("updates counter value correctly", () => {
      component.instance().incrementCounter();
      expect(component.state().counter).toEqual(1);
      expect(component.state().hasEdited).toEqual(true);
    });
  });
});
```
With @testing-library:
```javascript
describe("RangeCounterB", () => {
  describe("when incrementing counter is allowed", () => {
    it("updates the counter value", async () => {
      const { getByTestId, getByText } = render(<RangeCounterB min={2} />);
      const incrementButton = getByText("+");
      fireEvent.click(incrementButton);
      expect(getByTestId("counter-value").innerHTML).toEqual("3");
    });
  });
});
```
But we can do something similar with Enzyme, testing the result not the implementation following testing-library philosophy of testing; in the following code first, you will see how to test with Enzyme following testing-library principles, then you will see the **same** test, but with testing-library:
```javascript
// components/Calendar/__tests__/Calendar.test.tsx
describe('<Calendar />  with Enzyme', () => {
  const setup = makeSetupComponent({ component: Calendar });
  test('should have integration with the toolbar', () => {
    const { component } = setup();
    const toolbar = component.find('[data-testid="toolbar"]');
    expect(toolbar.children()).toHaveLength(9);
    const toolbarText = toolbar.text();
    expect(toolbarText).toContain(moment(Date.now()).format(DATE_FORMATS.TOOLBAR_LABEL));
    expect(component.find('p').at(0).text()).toContain('Current view: week');
    const toolbarNextButton = toolbar.find('button').at(2);
    expect(toolbarNextButton.text()).toContain('Next');
    toolbarNextButton.simulate('click');
    const toolbarMonthButton = toolbar.find('button').at(5);
    expect(toolbarMonthButton.text()).toContain('month');
    toolbarMonthButton.simulate('click');
    const updatedToolbarText = toolbar.at(0).text();
    const expectedToolbarDate = moment(new Date(2021, 3, 19)).format(DATE_FORMATS.TOOLBAR_LABEL);
    expect(updatedToolbarText).toContain(expectedToolbarDate);
    expect(component.find('p').at(0).text()).toContain('Current view: month');
  });
  test('should have integration with DateCellWrapper', () => {
    const { component } = setup();
    const toolbarMonthButton = component.find('[data-testid="toolbar"]').find('button').at(5);
    expect(toolbarMonthButton.text()).toContain('month');
    toolbarMonthButton.simulate('click');
    component.find('[data-testid="dataCellWrapper-button"]').at(4).simulate('click');
    const sideColumnAgenda = component.find('.rbc-agenda-table').at(1).text();
    expect(sideColumnAgenda).toContain('All Day Event very long title');
  });
});
describe('<Calendar /> with @testing-library', () => {
  test('should have integration with the toolbar', () => {
    render(<Calendar />);
    expect(screen.queryByText(moment(Date.now()).format(DATE_FORMATS.TOOLBAR_LABEL))).toBeTruthy();
    expect(screen.queryByText('Current view: week')).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    fireEvent.click(screen.getByRole('button', { name: 'month' }));
    expect(screen.queryByText('Current view: month')).toBeTruthy();
    expect(screen.getAllByTestId('toolbar')).toHaveLength(2);
  });
  test('should have integration with DateCellWrapper', () => {
    const { container } = render(<Calendar />);
    fireEvent.click(screen.getByRole('button', { name: 'month' }));
    fireEvent.click(screen.getAllByTestId('dataCellWrapper-button')[4]);
    expect(container.getElementsByClassName('rbc-agenda-event-cell')[0].textContent).toContain(
      'All Day Event very long title',
    );
  });
  test('Renders modal when clicking calendar event', () => {
    // solution to make typescript understand that this is a mock and avoid the error
    // mockImplementationOnce does not exist on type useInteractiveClasses
    const useInteractiveClassesMock = useInteractiveClasses as jest.Mock<
      IInteractiveClassesProviderValue
    >;
    useInteractiveClassesMock.mockImplementationOnce(() => ({
      classInstances: [
        {
          ...mockClassInstances(new Date())[0],
          start: new Date('2021-04-19'),
          end: new Date('2021-04-19'),
          title: 'All Day Event very long title',
          subCategory: '',
          trainerName: '',
        },
      ],
    }));
    render(<Calendar />);
    expect(screen.queryByText('All Day Event very long title')).toBeTruthy();
    fireEvent.click(screen.getByText('All Day Event very long title'));
    expect(screen.queryByText('Edit')).toBeTruthy();
    fireEvent.click(screen.getByText('Edit'));
    expect(screen.queryByText('Cancel')).toBeTruthy();
    fireEvent.click(screen.getByText('Cancel'));
  });
});
```
## How to test forms with testing-library
Independently of the form's library that you're using, this is the way of testing following testing-library principles:  
  
```javascript
import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MyForm } from './myForm.js'
test('rendering and submitting a basic Formik form', async () => {
  const handleSubmit = jest.fn()
  render(<MyForm onSubmit={handleSubmit} />)
  userEvent.type(screen.getByLabelText(/first name/i), 'John')
  userEvent.type(screen.getByLabelText(/last name/i), 'Dee')
  userEvent.type(screen.getByLabelText(/email/i), 'john.dee@someemail.com')
  userEvent.click(screen.getByRole('button', { name: /submit/i }))
  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'john.dee@someemail.com',
      firstName: 'John',
      lastName: 'Dee',
    }, expect.anything())
  )
})
```
## Custom renders
On testing-library you supposed to create a custom render for every Wrapper you want to create; for that, you have two ways. The first way is:
```javascript
function Wrapper({ children }) {
    return <IntlProvider locale={locale}>{children}</IntlProvider>
}
function customRender(ui, options) {
    return render(<Wrapper>{ui}</Wrapper>, options })
}
```
The second way is:  
  
```javascript
function Wrapper({ children }) {
    return <IntlProvider locale={locale}>{children}</IntlProvider>
}
function customRender(ui, options) {
    return render(ui, { wrapper: Wrapper, ...options } })
}
```
  
I do I prefer the first way? It's because if you use the  
`wrapper` API in `options` on your test, you'll still be able to do it;
## setupComponent on testing-library with a customRender
I did check that on Beachbody we have the `setupComponent` function, that when we translate to testing-library, it's a `customRender` with multiple component wrappers inside. To understand what I did, check the following sections.
### **MockDateWrapper -** test_utils/testing-library/**MockDateWrapper.tsx**
This was the simplest one, I just need to mock the date-time; the default dat always will be 19 of December of 2021; I'm using `mockDate` because it already solve the problem and we don't need to create a unit test for this function;  
  
```typescript
import MockDate from 'mockdate';
const MockDateWrapper = ({
  children,
  mockDate = '2021-12-19',
}: {
  children: JSX.Element;
  mockDate?: string;
}): JSX.Element => {
  MockDate.set(mockDate);
  return children;
};
export default MockDateWrapper;
```
  
### ThemeWrapper - test_utils/testing-library/ThemeWrapper.tsx  
  
We need to provide the `ThemeProvider` to the components; for that I did the `ThemeWrapper` it basically is a `render` with the default theme of the project; if some reason you need to use a custom theme, you just provide it to this wrapper:
```typescript
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import theme from 'styles/theme';
const ThemeWrapper = ({
  children,
  customTheme,
}: {
  children: JSX.Element;
  customTheme?: Record<string, unknown>;
}): JSX.Element => (
  <>
    <GlobalStyle theme={customTheme ?? theme} />
    <ThemeProvider theme={customTheme ?? theme}>{children}</ThemeProvider>
  </>
);
export default ThemeWrapper;
```
### IntlProviderWrapper - test_utils/testing-library/IntlProviderWrapper.tsx
The `react-intl` is be using on blue-label `setupComponent`, so I did a wrapper for the `react-intl` here too; the default behavior is to use the `en` locale as default:  
  
```typescript
import { IntlProvider, ResolvedIntlConfig } from 'react-intl';
const IntlProviderWrapper = ({
  children,
  intl,
}: {
  children: JSX.Element;
  intl?: {
    defaultLocale?: ResolvedIntlConfig['defaultLocale'];
    locale: ResolvedIntlConfig['locale'];
    messages?: ResolvedIntlConfig['messages'];
  };
}): JSX.Element => {
  if (!intl?.locale) {
    return children;
  }
  const { defaultLocale, locale, messages } = intl;
  return (
    <IntlProvider messages={messages} defaultLocale={defaultLocale} locale={locale}>
      {children}
    </IntlProvider>
  );
};
export default IntlProviderWrapper;
```
  
In your computer it will probably never suffer fail with internationalization, but on Travis, it maybe can happen; to solve this problem you need to call  
`setupTests()` of `test_utils/testing-library/intlMock.js` as I did here:  
  
```typescript
// test_utils/testing-library/tests/IntlProviderWrapper.test.tsx
...
setupTests();
describe('IntlProviderWrapper', () => {
  MockDate.set('2021-12-24');
  test('using locale format and message parameter', () => {
....
```
### ReduxWrapper - test_utils/testing-library/ReduxWrapper.tsx
We have a component that requires Redux; for this reason, this component is used on `customRender`. To create the store with Redux, I did the same way we already are be doing on blue-label `setupComponent`; The wrapper itself is straightforward, as you can read here:  
  
```typescript
import { Provider } from 'react-redux';
import merge from 'lodash/merge';
import configureStore from 'redux-mock-store';
import injectMiddleware from 'test_utils/injectMiddleware';
import { createPromise } from 'redux-promise-middleware';
import { baseComponentReduxState } from 'test_utils';
import thunk from 'redux-thunk';
const ReduxWrapper = ({
  children,
  initialState = {},
  includeBaseComponentState = false,
}: {
  children: JSX.Element;
  initialState?: Record<string, unknown>;
  includeBaseComponentState?: boolean;
}): JSX.Element => {
  const middlewares = [
    injectMiddleware({
      fetch,
      thunk,
    }),
    createPromise({ promiseTypeSuffixes: ['START', 'SUCCESS', 'ERROR'] }),
  ];
  const mockStore = configureStore(middlewares);
  const store = mockStore(
    merge({}, includeBaseComponentState ? baseComponentReduxState : {}, initialState),
  );
  return <Provider store={store}>{children}</Provider>;
};
export default ReduxWrapper;
```
  
The problem comes when you need to understand how to test a component with Redux using this wrapper; on his unit test you can check that I did the full boilerplate of a redux component to test, here:  
  
```typescript
import { createContext, useContext } from 'react';
import { render, screen } from '@testing-library/react';
import { ReactReduxContext } from 'react-redux';
import { baseComponentReduxState } from 'test_utils/tests';
import ReduxWrapper from '../ReduxWrapper';
type Hello = { stringValue: string };
export const TemplateStateContext = createContext<Hello>({} as Hello);
function TemplateProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const value: Hello = {
    stringValue: 'empty',
  };
  return <TemplateStateContext.Provider value={value}>{children}</TemplateStateContext.Provider>;
}
function useTemplateSelector(): Hello {
  return useContext(TemplateStateContext);
}
export function TemplateSelectorProvider(): JSX.Element {
  return (
    <TemplateProvider>
      <TemplateSelector />
    </TemplateProvider>
  );
}
export function TemplateSelector(): JSX.Element {
  const { stringValue } = useTemplateSelector();
  return <h1>final: {stringValue}</h1>;
}
describe('<ReduxWrapper />', () => {
  test('should render redux with the default paramanters', () => {
    render(
      <ReduxWrapper>
        <TemplateSelectorProvider />
      </ReduxWrapper>,
    );
    expect(screen.getByText('final: empty')).toBeTruthy();
  });
  test('should receive the includeBaseComponentState default value of context', () => {
    const ComponentWithBaseState = () => {
      const { store } = useContext(ReactReduxContext);
      expect(store.getState()).toStrictEqual(baseComponentReduxState);
      return <div>componentWithBaseState</div>;
    };
    render(
      <ReduxWrapper includeBaseComponentState>
        <ComponentWithBaseState />
      </ReduxWrapper>,
    );
  });
});
```
## The customRender - test_utils/testing-library/customRender.tsx
Here we glue everything together to create functionality like `setupComponent` with Enzyme, but on testing-library:  
  
```typescript
import { queries, Queries, render, RenderOptions, RenderResult } from '@testing-library/react';
import { ResolvedIntlConfig } from 'react-intl';
import ContextWrapper from './ContextWrapper';
import ThemeWrapper from './ThemeWrapper';
import MockDateWrapper from './MockDateWrapper';
import IntlProviderWrapper from './IntlProviderWrapper';
import ReduxWrapper from './ReduxWrapper';
export function customRender<
  ContextType,
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement
>(
  ui: JSX.Element,
  customOptions?: {
    context?: { Context: React.Context<ContextType>; providerProps: ContextType };
    theme?: Record<string, unknown>;
    mockDate?: string;
    intl?: {
      defaultLocale?: ResolvedIntlConfig['defaultLocale'];
      locale: ResolvedIntlConfig['locale'];
      messages?: ResolvedIntlConfig['messages'];
    };
  },
  options: Omit<RenderOptions<Q, Container>, 'queries'> = {},
): RenderResult<Q, Container> {
  return render(
    <ContextWrapper context={customOptions?.context}>
      <ThemeWrapper customTheme={customOptions?.theme}>
        <MockDateWrapper mockDate={customOptions?.mockDate}>
          <IntlProviderWrapper intl={customOptions?.intl}>
            <ReduxWrapper>{ui}</ReduxWrapper>
          </IntlProviderWrapper>
        </MockDateWrapper>
      </ThemeWrapper>
    </ContextWrapper>,
    options,
  );
}
export default customRender;
```
  
The same type-safe of the render from testing-library, but with multiple  
`customOptions` like on `setupComponent`; I didn't the use of `options` to use all those wrappers in case that we want to use this same parameter for something more in our unit testing.  
  
To understand what custom options belongs to which wrapper, you can read this unit test, check the  
`test` individually:  
  
```typescript
import { screen } from '@testing-library/react';
import defaultTheme from 'styles/theme';
import customRender from '../customRender';
import { CustomContext, ComponentUsignCustomContext, ICustomContext } from './ContextWrapper.test';
import { MyComponentWithTheme } from './ThemeWrapper.test';
import { ComponentWithNewDate } from './MockDateWrapper.test';
import { TemplateSelectorProvider } from './ReduxWrapper.test';
describe('customRender', () => {
  test('should render without options', () => {
    customRender(<h1>empty</h1>);
    expect(screen.getByText('empty')).toBeTruthy();
  });
  test('should render with Context', () => {
    customRender<ICustomContext>(<ComponentUsignCustomContext />, {
      context: { Context: CustomContext, providerProps: { value: 'context' } },
    });
    expect(screen.getByText('context')).toBeTruthy();
  });
  test('should render with theme', () => {
    customRender(<MyComponentWithTheme data-testid="styled-component" />);
    expect(screen.getByTestId('styled-component')).toHaveStyleRule(
      'background-color',
      defaultTheme.whiteBG,
    );
  });
  test('should render with specic date time', () => {
    customRender(<ComponentWithNewDate />);
    expect(screen.getByTestId('date')).toHaveTextContent('Sun Dec 19 2021 00:00:00 GMT+0000');
  });
  test('should render with redux', () => {
    customRender(<TemplateSelectorProvider />);
    expect(screen.getByText('final: empty')).toBeTruthy();
  });
});
```
  
In case that you need to use  
`customOptions` to multiple wrappers, you just pass it on the second parameter of the `customRender`; the third paramanter of `customRender` is reserved to the `options` of the testign-library's `render`  
  
P.S: Check the type safe on the unit testing with Context using the interface  
`ICustomContext`: