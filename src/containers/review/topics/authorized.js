import AmosChat from 'components/amos-chat'
import Button from 'components/button'
import Buttons from '../buttons.sc'
import Title from 'components/title'
import Input from 'components/input'
import Monolog from '../monolog.sc'
import React from 'react'
import {navto} from 'common/history'
import {Review} from 'constants/chat'

const Authorized = () => (
  <Monolog>
    <Title>Topics</Title>
    <AmosChat messages={Review.Topics}/>
    <Input />
    <Buttons>
      <Button onClick={navto(`/review/links`)}>
        Previous
      </Button>
      <Button primary onClick={navto(`/review/requirements`)}>
        Next
      </Button>
      <Button>
        Finish
      </Button>
    </Buttons>
  </Monolog>
)

export default Authorized
