import React, { useEffect, useRef, useState } from 'react'
import { PopoverInteractionKind, PopoverPosition } from '@blueprintjs/core'
import { Container, Layout, Button, ButtonVariation } from '@harnessio/uicore'
import css from './CDECustomDropdown.module.scss'

interface CDECustomDropdownProps {
  leftElement: React.ReactNode
  label: React.ReactNode
  menu: React.ReactNode
  overridePopOverWidth?: boolean
}

export const CDECustomDropdown = ({ label, menu, leftElement, overridePopOverWidth }: CDECustomDropdownProps) => {
  const buttonRef = useRef<HTMLDivElement | null>(null)
  const [popoverWidth, setPopoverWidth] = useState(0)

  useEffect(() => {
    if (
      buttonRef?.current?.getBoundingClientRect()?.width &&
      buttonRef?.current?.getBoundingClientRect()?.width !== popoverWidth
    ) {
      setPopoverWidth(buttonRef?.current?.getBoundingClientRect()?.width)
    }
  }, [buttonRef?.current, popoverWidth])

  return (
    <Layout.Horizontal className={css.main}>
      <Container width="70%">{leftElement}</Container>
      <Container width="30%" ref={buttonRef}>
        <Button
          height="45px"
          width="100%"
          className={css.button}
          text={label}
          rightIcon={'chevron-down'}
          variation={ButtonVariation.TERTIARY}
          iconProps={{ size: 14 }}
          tooltipProps={{
            fill: true,
            interactionKind: PopoverInteractionKind.CLICK,
            position: PopoverPosition.BOTTOM_RIGHT,
            popoverClassName: css.popover
          }}
          tooltip={
            <Container className={css.listContainer} width={overridePopOverWidth ? '100%' : popoverWidth}>
              {menu}
            </Container>
          }
        />
      </Container>
    </Layout.Horizontal>
  )

  return <div>CDECustomDropdown</div>
}
