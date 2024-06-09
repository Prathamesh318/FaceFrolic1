"use client"
import { VideoPreview, useCall } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'

const MeetingSetup = () => {

    const [isMicCamToggleOn, setisMicCamToggleOn] = useState(false)

    const call=useCall();
    useEffect(()=>{

    },[isMicCamToggleOn,call?.camera,call?.microphone])
  return (
    <div>
        <div className='flex h-screen w-full flex-col items-center justify-center gap-3 text-white'>
                <h1 className='text-2xl font-bold'>Setup
                </h1>
                <VideoPreview/>

        </div>

    </div>
  )
}

export default MeetingSetup