import React from 'react'
import DatePicker from 'react-native-date-picker'

export const InputDate = ({date, setDate, open, setOpen, button}) => {
  return (
    <>
      {button()}
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(value) => {
          setOpen(false)
          setDate(value)
        }}
        onCancel={() => {
          setOpen(false)
        }}
        mode="date"
      />
    </>
  )
}