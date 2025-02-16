import ChatLayout from '@/components/chat/ChatLayout'
import PreferenceTab from '@/components/PreferenceTab'
import { cookies } from 'next/headers'
import React from 'react'

const Home = async() => {
  const layout = (await cookies()).get("react-resizable-panels:layout");
  
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;

  return (
    <main className='flex h-screen flex-col items-center justify-center p-4 md:px-24 py-32 gap-4'>
      <PreferenceTab />

      {/* dotted bg */}
      <div
        className="absolute top-0 z-[-2] h-screen w-screen 
        bg-white bg-[radial-gradient(circle,_#00000033_1px,_transparent_1px)] bg-[size:20px_20px] 
        dark:bg-black dark:bg-[radial-gradient(circle,_#ffffff33_1px,_transparent_1px)] dark:bg-[size:20px_20px]"
        aria-hidden="true"
      />
      <div className='z-10 border rounded-lg max-w-5xl w-full min-h-[85vh] text-sm lg:flex' >
        <ChatLayout defaultLayout = {defaultLayout} />
      </div>

    </main>
  )
}

export default Home