import React from "react"
import { Map, Marker } from "pigeon-maps"

export function MyMap(props) {
  return (
    <Map height={300} defaultCenter={[props.lat, props.lng]} defaultZoom={11}>
      <Marker width={50} anchor={[props.lat, props.lng]} />
    </Map>
  )
}