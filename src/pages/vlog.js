import React from 'react'

import VlogDeviceItem from '../components/vlog-device-item'
import VlogPostItem from '../components/vlog-post-item'

const devices = [
  {
    name: 'Sony A6300',
    thumbnail: 'some image link'
  }
]

const archive = [
  {
    id: '009'
    name: 'Dubai 001 Longway to Dubai',
    link: 'asd',
    thumbnail: 'some image url',
    devices: [ ]
  },
]

class VlogPage extends React.Component {
  constructor() {
    super()
  }

  render() {
    const devices_list = _.map(devices, (device) => {
      return <VlogDeviceItem data={device}/>
    })

    const posts_list = _.map(archive, (post) => {
      return <VlogPostItem data={post}/>
    })

    return (
      <div className="container">
        <div id="device-list">
          {devices_list}
        </div>
        <div id="vlog-list">
          {posts}
        </div>
      </div>
    )
  }
}

export default VlogPage
