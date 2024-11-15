import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          {/* Text Section */}
          <div className="w-full px-4 lg:w-3/4 mb-8">
            <div className="max-w-[600px] mx-auto">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Meshtastic 的主要功能
              </h3>
              <ul className="list-disc list-inside text-base font-medium text-body-color">
                <li className="mb-4">
                  <strong>主频道通信：</strong>发送未加密消息，所有网络中的用户都可以看到，适用于公开信息分享。
                </li>
                <li className="mb-4">
                  <strong>群组频道：</strong>发送加密消息到特定群组，用户需要密钥才能加入并接收信息。
                </li>
                <li className="mb-4">
                  <strong>私人消息：</strong>加密点对点通信，确保隐私和安全。
                </li>
                <li className="mb-4">
                  <strong>GPS 定位：</strong>可选择共享实时位置，让所有用户在应用地图中看到您的位置。
                </li>
                <li className="mb-4">
                  <strong>全球互联：</strong>通过 MQTT 网关，连接本地网络到全球其他 Meshtastic 网络。
                </li>
                <li>
                  <strong>遥测数据：</strong>支持传感器数据，例如电池电量、信号强度，甚至天气数据。
                </li>
              </ul>
            </div>
          </div>

          {/* Centered Image Section */}
          <div className="w-full px-4 lg:w-3/4">
            <div className="relative mx-auto max-w-full">
              <Image
                src="/images/about/meshtastic-mqtt.webp"
                alt="Meshtastic Features"
                layout="responsive"
                width={2364} // Image's original width
                height={616} // Image's original height to maintain 3.84:1 aspect ratio
                objectFit="contain"
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/meshtastic-mqtt.webp"
                alt="Meshtastic Features"
                layout="responsive"
                width={2364}
                height={616}
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

export default AboutSectionTwo;
