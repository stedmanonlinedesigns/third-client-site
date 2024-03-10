import React from 'react'
import { Button as MUIButton } from '@mui/material'

type Props = {}

export default function Button({}: Props) {
  return (
    <MUIButton variant='text'>Button</MUIButton>
  )
}