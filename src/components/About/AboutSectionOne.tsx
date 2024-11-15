import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionOne = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="什么是 Meshtastic？"
                paragraph="Meshtastic 是一个开源的 LoRa 网状网络项目，允许用户在没有互联网、手机信号或电力的情况下进行通信。无论是在户外探险、自然灾害期间，还是在远程地区，Meshtastic 都能提供去中心化的通信解决方案。"
                mb="44px"
              />
              <p className="text-base text-body-color">
                Meshtastic 是完全社区驱动的项目，其目标是通过低成本的硬件和开源软件，为全球用户提供易用的长距离通信平台。它通过 LoRa 技术构建网状网络，用户设备会自动中继消息，实现区域覆盖。
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/meshtastic-intro.svg"
                  alt="Meshtastic Introduction"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="https://meshtastic.org/assets/images/lora-topology-2-c80684f1eafdf2a71fbaf26e494fb26d.webp"
                  alt="Meshtastic Introduction"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
