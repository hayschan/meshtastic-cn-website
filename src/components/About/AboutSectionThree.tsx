import Image from "next/image";

const AboutSectionThree = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <h3 className="mb-8 text-2xl font-bold text-black dark:text-white">
              为什么建立 Meshtastic 网络？
            </h3>
            <p className="mb-6 text-base font-medium text-body-color">
              Meshtastic 的目标是为用户提供去中心化、开放和具有韧性的通信解决方案，无论是在灾难应急、户外活动还是社区建设中，Meshtastic 都能发挥作用。
            </p>
            <ul className="list-disc list-inside text-base font-medium text-body-color">
              <li className="mb-4">
                <strong>社区建设：</strong>为本地用户提供群组聊天功能，分享信息和资源，促进社区交流。
              </li>
              <li className="mb-4">
                <strong>应急通信：</strong>在停电或网络中断时，用户可以继续通信，获取救援信息或与家人联系。
              </li>
              <li>
                <strong>开放和去中心化：</strong>任何人都可以加入网络，软件完全开源，无需依赖中心服务器。
              </li>
            </ul>
          </div>

          {/* Adjusted image container to align to the right */}
          <div className="w-full px-4 lg:w-1/2 flex justify-end">
            <div
              className="relative mb-12 max-w-[380px] lg:m-0"
              style={{ aspectRatio: '3 / 4' }}
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/outdoor-node.webp"
                alt="Meshtastic Use Cases"
                layout="responsive"
                width={760} // Original width of the image
                height={1024} // Original height of the image to maintain 3:4 ratio
                objectFit="contain"
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/outdoor-node.webp"
                alt="Meshtastic Use Cases"
                layout="responsive"
                width={760}
                height={1024}
                objectFit="contain"
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
