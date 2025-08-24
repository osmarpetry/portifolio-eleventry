---
title: "Offline Apollo with @client"
date: 2025-01-15
tags:
  - '#apollo'
  - '#graphql'
  - '#offline'
  - '#client'
description: "Offline Apollo with @client directive"
layout: post.njk
---

# Offline Apollo with @client
This is a old note explaining me with a snipped of code how to use @client to use Apollo to store data offline
```javascript
import endOfWeek from 'date-fns/end_of_week'
import format from 'date-fns/format'
import startOfWeek from 'date-fns/start_of_week'
const DATE = new Date()
export default {
    schedule: {
        __typename: 'Schedule',
        date: format(DATE, 'YYYY-MM-DD'),
        startDate: format(startOfWeek(DATE), 'YYYY-MM-DD') + ' 00:00',
        endDate: format(endOfWeek(DATE), 'YYYY-MM-DD') + ' 23:59',
        view: 'week'
    },
    sidebar: {
        __typename: 'Sidebar',
        expanded: false,
        selected: 'dashboard'
    },
    notification: {
        __typename: 'Notification',
        open: false,
        variant: 'success',
        message: ''
    },
    trial: {
        __typename: 'Trial',
        open: false,
        variant: 'success'
    }
}
```
With this code I create the query
```javascript
export const SCHEDULE = gql`
    query schedule {
        schedule @client {
            endDate
            startDate
            date
            view
            __typename
        }
    }
`
```
Query resolver
```javascript
export const getDateTime = graphql(SCHEDULE, {
    props: ({ data }: TQuery<'schedule', ISchedule>) => ({
        date: pathOr('', ['schedule', 'date'], data),
        endDate: pathOr('', ['schedule', 'endDate'], data),
        startDate: pathOr('', ['schedule', 'startDate'], data),
        view: pathOr('', ['schedule', 'view'], data)
    })
})
```
Mutation resolver
```javascript
export const setDateTime = graphql(SET_DATE_TIME, {
    props: ({ mutate }) => ({
        onSetDateTime: (variables: ISchedule) =>
            mutate!({ variables })
    })
})
```
```javascript
import { gql } from 'apollo-boost' 
export const SET_DATE_TIME = gql` 
	mutation setDateTime( $startDate: String! $endDate: String! $date: String! $view: String! ) { 
			setDateTime( 
				startDate: $startDate 
				endDate: $endDate 
				date: $date 
				view: $view 
			) 
		@client 
}`
```