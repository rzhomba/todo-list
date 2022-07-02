import React, { useLayoutEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks'
import { hideNotification, selectNotification } from './notificationSlice'
import './Notification.css'

const Notification = () => {
  const { visible, type, message } = useAppSelector(selectNotification)
  const dispatch = useAppDispatch()

  useLayoutEffect(() => {
    if (!visible) {
      return
    }
    const hide = () => {
      dispatch(hideNotification())
    }
    const timeoutId = setTimeout(hide, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [visible])

  return (
    <div className={`notification ${visible ? 'notification-visible' : 'notification-hidden'} notification-${type}`}>
      {message}
    </div>
  )
}

export default Notification
