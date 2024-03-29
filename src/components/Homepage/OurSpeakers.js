import { array, shape } from 'prop-types'
import LinkButton from '../LinkButton'
import React from 'react'
import SpeakersList from '../SpeakersPage/SpeakersList'

const MAX_COUNT = 6

const OurSpeakers = ({ speakers, ...props }) => {
  speakers = speakers || { edges: [] }
  if (!speakers.edges.length || speakers.edges.length < MAX_COUNT) {
    return null
  }
  const actions = [
    <LinkButton href="/speakers/" key={0}>
      See Them All
    </LinkButton>
  ]
  return (
    <SpeakersList
      actions={actions}
      items={speakers.edges.map((edge) => edge.node).slice(0, MAX_COUNT)}
      title="Our Speakers"
      {...props}
    />
  )
}

OurSpeakers.propTypes = {
  speakers: shape({
    edges: array
  })
}

export default OurSpeakers
