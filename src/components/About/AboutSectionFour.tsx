import Image from "next/image";

const AboutSectionFour = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/meshtastic-coverage.svg"
                alt="Meshtastic Coverage"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/meshtastic-coverage-dark.svg"
                alt="Meshtastic Coverage"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <h3 className="mb-8 text-2xl font-bold text-black dark:text-white">
              Meshtastic 的覆盖范围
            </h3>
            <p className="text-base font-medium text-body-color">
              随着社区人数增多，更多区域就能获得覆盖，从而享受高质量的通信服务。目前以浙江和广东的节点最密集。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionFour;
