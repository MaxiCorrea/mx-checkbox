import { Checkbox, FormControlLabel } from '@material-ui/core'
import * as React from 'react'
import { CheckedIcon } from './svg/CheckedIcon'
import { UncheckedIcon } from './svg/UncheckedIcon'

interface MxCheckboxProps {
  readonly label?: string
  readonly checked: boolean
  readonly onClick?: () => void
  readonly disabled?: boolean
}

export const MxCheckbox: React.VFC<MxCheckboxProps> = (props) => {
  return (
    <FormControlLabel
      label={props.label}
      control={
        <Checkbox
          icon={<UncheckedIcon />}
          checkedIcon={<CheckedIcon />}
          onClick={() => {
            props.onClick && props.onClick()
          }}
          checked={props.checked}
        />
      }
    />
  )
}
