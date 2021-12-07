import { FC } from "react"
import styled from "styled-components"

type Props = {
  text: string
}

export const Copyright: FC<Props> = ({ text }) => (
  <Paragraph>&copy; {text}</Paragraph>
)

const Paragraph = styled.p`
  color: #ccc;
  font-size: 1.5em;
  text-align: center;
`
