import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import Image from 'next/image'

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        <span className="text-purple">โปรเจคล่าสุด</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link, gitLink, date }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex item-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={title} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vw] h-[30vw] lg:h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162]">
                  <Image src="/bg.png" alt="bg-img" layout="fill" objectFit="cover" />
                </div>
                <Image src={img} alt={title} layout="fill" objectFit="cover" className="z-10 absolute bottom-0" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
              <p className="text-center text-gray-500 lg:text-md md:text-sm text-xs mt-1">
                {date}
              </p>

              <div className="flex item-center justify-between mt-7 mb-3">
                <div className="flex items-center ">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index * 2}px)`,
                      }}
                    >
                      <Image src={icon} alt={icon} width={40} height={40} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center space-x-4">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex lg:text-xl md:text-xs text-purple"
                  >
                    Check Live Site
                  </a>
                  <a
                    href={gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex lg:text-xl md:text-xs text-purple"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects