# Meshtastic China Website

欢迎访问 [Meshtastic China 网站](https://github.com/hayschan/meshtastic-cn-website)！这是一个面向 Meshtastic 中国社区的官方网站，旨在推广 Meshtastic 项目，帮助用户了解和使用 Meshtastic 提供的开源 LoRa 网状网络通信技术。

## 什么是 Meshtastic？

Meshtastic 是一个基于 LoRa 技术的开源项目，允许用户使用低成本的 LoRa 无线电设备搭建去中心化的长距离离线通信网络。Meshtastic 专为以下场景设计：
- **无网络覆盖地区**：适合在没有可靠通信基础设施的环境中使用。
- **应急通信**：例如自然灾害期间的通信中断。
- **户外探险**：支持远距离团队通信，无需蜂窝网络。

### Meshtastic 的主要特点

1. **去中心化网状网络**  
   - Meshtastic 使用 LoRa 技术，每个设备都可以作为中继器，通过设备间的消息转发构建网络。无需任何中心化的路由器支持。

2. **超长距离通信**  
   - 在空旷环境中，Meshtastic 已创下 **331 公里** 的通信距离记录，表现出卓越的覆盖能力。

3. **低功耗设计**  
   - LoRa 设备功耗极低，支持长时间运行，非常适合电力有限的环境。

4. **加密通信**  
   - 所有通信均可加密，保护用户隐私，支持点对点和群组加密消息。

5. **无需手机**  
   - 用户无需手机即可在网状网络中通信，同时设备也可选择与手机配对，发送消息或查看 GPS 定位。

6. **开源与社区驱动**  
   - Meshtastic 是一个完全开源的项目，代码和设计由全球社区贡献并维护，任何人都可以参与改进。

### Meshtastic 的工作原理

- Meshtastic 使用 LoRa（一种低功耗、远距离的无线通信协议）建立网状网络。
- 所有 Meshtastic 设备都可以接收和中继消息，确保网络中所有用户都能通信，即使是最远端的设备。
- 可选的 GPS 功能支持用户共享实时位置，非常适合团队协作或户外活动。

## 技术栈与主题

本网站基于以下技术和工具：
- **主题**：采用了 [Startup Next.js 模板](https://github.com/NextJSTemplates/startup-nextjs)。
- **框架**：构建于 Next.js 和 Tailwind CSS。
- **自动部署**：使用 [Netlify](https://www.netlify.com/) 进行自动化部署，代码提交后会触发自动构建和上线。

## 如何贡献

我们热忱欢迎任何形式的贡献，无论是代码优化、文档完善还是内容翻译！以下是参与方式：
1. **提交 Issue**：发现问题或有建议，请通过 [GitHub Issues](https://github.com/hayschan/meshtastic-cn-website/issues) 提交。
2. **贡献代码**：
   - Fork 本仓库。
   - 创建一个新分支并提交代码。
   - 通过 Pull Request 提交您的更改。
3. **改进内容**：添加新的社区资源或改进网站排版。

您的每一份贡献都将帮助 Meshtastic 在中国推广！

## 如何运行本地环境

如果您想在本地运行本项目，可以按照以下步骤操作：

### 1. 克隆项目
```bash
git clone https://github.com/hayschan/meshtastic-cn-website.git
cd meshtastic-cn-website
```

### 2. 安装依赖
确保已安装 [Node.js](https://nodejs.org/) 和 npm/yarn，然后运行：
```bash
npm install
# 或
yarn install
```

### 3. 启动开发服务器
```bash
npm run dev
# 或
yarn dev
```

开发服务器启动后，通过本地 `localhost` URL 查看本地网站。

## 联系我们

如果您有任何问题或建议，欢迎通过 [GitHub Issues](https://github.com/hayschan/meshtastic-cn-website/issues) 联系我们。