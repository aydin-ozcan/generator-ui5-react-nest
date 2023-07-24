# Yeoman Generator for UI5 Nest React

In the dynamic world of business, we never know what requirements may come our way. While UI5 is already a powerful framework, there are times you need to integrate it with other UI technologies when business demands.

In this blog post, we'll explore the blending of React application with UI5 by leveraging a custom UI5 control (UI5Nest) which effortlessly handles loading and embedding React applications. Unlike traditional solutions that rely on iframes, this integration takes advantage of native loading to HTML div elements, ensuring that your React app seamlessly blends with other UI5 controls, acting like any other UI5 control.

<img class="aligncenter" src="https://blogs.sap.com/wp-content/uploads/2023/06/Screenshot-2023-06-19-at-10.13.26.png" alt="Workzone%20view" />
Above Image taken from CF Workzone . Below is the code for this,
<pre class="language-markup"><code>&lt;mvc:View
	controllerName="nest.controller.Main"
	displayBlock="true"
	xmlns:custom="nest.ExtApp"
	xmlns="sap.m"
	xmlns:mvc="sap.ui.core.mvc"&gt;
  &lt;VBox
    justifyContent="Center" 
    alignItems="Center" 
    height="100%" &gt;
  	&lt;VBox&gt;
    	&lt;Title text="UI5"  titleStyle="H1" /&gt;
      &lt;Button
        text="count is {/count}"  press=".onIncrement" /&gt;
    &lt;/VBox&gt;
    &lt;custom:UI5Nest id="react" /&gt;
  &lt;/VBox&gt;
&lt;/mvc:View&gt;​</code></pre>

## Managed Router, HTML5 Repository and Build Workzone

You can deploy to HTML5 Repository like you do it with your UI5 application.
UI5Nest control integration with Workzone or Fiori Launchpad (on-prem)  is seamless. This means that your React application receives real-time updates for localization and theme changes when events occur.
You will receive initial values of the theme and locale in your React app.
You will receive these updates again if they change , ensuring you don't miss any updates.

<pre class="language-javascript"><code>function onThemeChanged (sTheme) {  
  //Call central theme change function on App.jsx so it will serve standalone app and nested app
}

function onLocalizationChanged (sLocal) {  
  //Call central local change function on App.jsx so it will serve standalone app and nested app
 
}​</code></pre>

It ensures that your application maintains consistency and synchronicity and delivering a cohesive user experience.
`generator-ui5-react-nest` scaffolds the necessary files and configurations for managed router. So it is ready to deploying the Workzone service on Cloud Foundry.

## UI5 Generator: `generator-ui5-react-nest`

To further simplify the process, I have created an UI5 generator for this purpose. This generator is based on pnpm monorepo, which allows for scaffolding UI5 and React applications and local test launchpad such as `launchpad.html` and other necessary files.

The scaffolded React application uses Vite,  It is modern , easy and fast . React team no longer recommends CRA also . While `react-router-dom` is not included in UI5 generator project, I use it in my projects ( with some modifications for launchpad integration ) and it works fine.

You should also use UI5 Web Components in your React app, but I chose not to include them in the generator to avoid making it overly opinionated.

As you will notice, the React application has 2 modes. The first one is standalone. It will act like any other React app. The second mode is UI5 mode. When you use pnpm script `start:ui5` or `build:ui5`, it will make the adjustments in the React app to be available to work in a UI5 app.

Although I usually prefer using TypeScript, I have opted for JavaScript in this case for the sake of simplicity and clarity. However, TypeScript is the way I used this method in my projects for both UI5 and React. So it can be easily integrated if desired.

You can install the ui5 react nest generator and yeoman (if you haven"t already)

<pre class="language-javascript"><code>npm i -g yo generator-ui5-react-nest
yo ui5-react-nest
​</code></pre>

By using the `generator-ui5-react-nest` and following the steps outlined in the blog post <a href="https://blogs.sap.com/2023/06/26/nest-react-applications-natively-alongside-ui5/">Nest React applications natively alongside UI5</a>, you can achieve a smooth integration of React applications with SAP UI5, enabling a consistent and powerful user experience across your projects.
