# Nest React applications natively alongside UI5 

In the dynamic world of business requirements, you never know what demands may come our way. While UI5 is already a powerful framework, there are times when you need to integrate it with other UI technologies when business demands.

In this blog post, we'll delve into the blending of React applications with SAP UI5 by leveraging a custom UI5 control (UI5Nest) that effortlessly handles loading and embedding React applications. Unlike traditional solutions that rely on iframes, this integration takes advantage of native loading to HTML div elements, ensuring that your React app seamlessly blends with other UI5 controls, acting like any other UI5 control.

## Tight Integration with Fiori Launchpad

UI5Nest custom control integration with the Fiori Launchpad is tight. This means that your React application receives real-time updates for local changes and theme changes when events occur. It ensures that your application maintains consistency and synchronicity with the Fiori Launchpad, delivering a cohesive user experience.

## Cloud Foundry Environment Managed Router, HTML5 Repository, and Workzone

You will receive initial values of the theme and locale in your React app. Since Workzone reloads the entire page every time a local or theme change occurs, you will receive these updates again, ensuring you don't miss any updates.

`generator-ui-react-nest` scaffolds necessary files and configurations for managed router for deployment Workzone service at Cloud Foundry.

## Easy UI5 Generator: `generator-ui-react-nest`

To further simplify the process, I have created an easy UI5 generator for this purpose. This generator is based on a pnpm monorepo, which allows for scaffolding UI5 and React applications and local test launchpad such as `launchpad.html`, and other necessary files.

The scaffolded React application uses Vite, as the React team no longer recommends CRA. While `react-router-dom` is not included in the easy UI5 generator project, I use it in my projects with some modifications for launchpad integration and it works fine.

You should also use UI5 web components in your React app, but I chose not to include them in the generator to avoid making it overly opinionated.

As you will notice, the React application has 2 modes. The first one is standalone. It will act like any other React app. The second mode is UI5 mode. When you use pnpm(npm) script `start:ui5` or `build:ui5`, it will make the adjustments in the React app to be available to work in a UI5 app.

Although I usually prefer using TypeScript, I have opted for JavaScript in this case for the sake of simplicity and clarity. However, TypeScript can be easily integrated if desired.

By using the `generator-ui-react-nest` and following the steps outlined in this blog post, you can achieve a smooth integration of React applications with SAP UI5, enabling a consistent and powerful user experience across your projects.

