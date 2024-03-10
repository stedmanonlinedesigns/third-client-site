import React from 'react'
import { Button as MUIButton } from '@mui/material'

// Get props type form MUI types
type Props = {
  look?: 'contained' | 'outlined' | 'text'
}

export default function Button({ look }: Props) {
  return (
    <MUIButton variant={look}>Button</MUIButton>
  )
}