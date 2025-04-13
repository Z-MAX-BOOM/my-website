"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7101],{8453:(e,s,r)=>{r.d(s,{R:()=>c,x:()=>l});var n=r(6540);const t={},o=n.createContext(t);function c(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(o.Provider,{value:s},e.children)}},8807:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"sharkbot/run","title":"\u57fa\u4e8eROS2\u7684\u673a\u5668\u4eba\u63a7\u5236\u4e0e\u5bfc\u822a","description":"1. \u7f16\u8bd1\u5de5\u4f5c\u7a7a\u95f4","source":"@site/docs/sharkbot/run.md","sourceDirName":"sharkbot","slug":"/sharkbot/run","permalink":"/my-website/docs/sharkbot/run","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sharkbot/run.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"sharkBot","permalink":"/my-website/docs/category/sharkbot"},"next":{"title":"ROS2\u5b66\u4e60\u7b14\u8bb0","permalink":"/my-website/docs/sharkbot/Ros2_learn"}}');var t=r(4848),o=r(8453);const c={sidebar_position:2},l="\u57fa\u4e8eROS2\u7684\u673a\u5668\u4eba\u63a7\u5236\u4e0e\u5bfc\u822a",i={},a=[{value:"1. \u7f16\u8bd1\u5de5\u4f5c\u7a7a\u95f4",id:"1-\u7f16\u8bd1\u5de5\u4f5c\u7a7a\u95f4",level:2},{value:"2. \u5b98\u65b9\u952e\u76d8\u63a7\u5236\u8282\u70b9,\u6539\u53d8\u6d88\u606f\u7c7b\u578b",id:"2-\u5b98\u65b9\u952e\u76d8\u63a7\u5236\u8282\u70b9\u6539\u53d8\u6d88\u606f\u7c7b\u578b",level:2},{value:"\u8fd0\u884c\u952e\u76d8\u63a7\u5236\u8282\u70b9,\u81ea\u5df1\u7f16\u5199",id:"\u8fd0\u884c\u952e\u76d8\u63a7\u5236\u8282\u70b9\u81ea\u5df1\u7f16\u5199",level:3},{value:"3. \u8fd0\u884c\u5bfc\u822a",id:"3-\u8fd0\u884c\u5bfc\u822a",level:2},{value:"4. twist\u6d88\u606f\u8f6c\u6362--\u5c06\u952e\u76d8\u63a7\u5236/\u5bfc\u822a\u7684\u6d88\u606f\u8f6c\u6362\u4e3a\u673a\u5668\u4eba\u63a7\u5236\u5668\u7684\u6d88\u606f(\u6ce8\u610f\u8f6c\u6362\u7684\u987a\u5e8f,\u5f88\u91cd\u8981)",id:"4-twist\u6d88\u606f\u8f6c\u6362--\u5c06\u952e\u76d8\u63a7\u5236\u5bfc\u822a\u7684\u6d88\u606f\u8f6c\u6362\u4e3a\u673a\u5668\u4eba\u63a7\u5236\u5668\u7684\u6d88\u606f\u6ce8\u610f\u8f6c\u6362\u7684\u987a\u5e8f\u5f88\u91cd\u8981",level:2},{value:"5. \u8fd0\u884c\u673a\u5668\u4eba\u6a21\u578b,\u53c2\u8003\u5c0f\u9c7c\u7684\u6a21\u578b,\u63a7\u5236\u5668\u53c2\u8003\u5b98\u65b9ros2_control",id:"5-\u8fd0\u884c\u673a\u5668\u4eba\u6a21\u578b\u53c2\u8003\u5c0f\u9c7c\u7684\u6a21\u578b\u63a7\u5236\u5668\u53c2\u8003\u5b98\u65b9ros2_control",level:2}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"\u57fa\u4e8eros2\u7684\u673a\u5668\u4eba\u63a7\u5236\u4e0e\u5bfc\u822a",children:"\u57fa\u4e8eROS2\u7684\u673a\u5668\u4eba\u63a7\u5236\u4e0e\u5bfc\u822a"})}),"\n",(0,t.jsx)(s.h2,{id:"1-\u7f16\u8bd1\u5de5\u4f5c\u7a7a\u95f4",children:"1. \u7f16\u8bd1\u5de5\u4f5c\u7a7a\u95f4"}),"\n",(0,t.jsxs)(s.p,{children:["\u5de5\u4f5c\u73af\u5883--ROS2",":humble",",Ubuntu 22.04\n\u53c2\u8003ROS2\u4e66\u7c4d",":ROS2","\u673a\u5668\u4eba\u5f00\u53d1:\u4ece\u5165\u95e8\u5230\u5b9e\u8df5,\u4f5c\u8005:\u6851\u6b23(\u9c7c\u9999ROS),\u673a\u68b0\u5de5\u4e1a\u51fa\u7248\u793e"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"cd sharkbot/chapt7_ws/\ncolcon build\nsource install/setup.bash\n"})}),"\n",(0,t.jsx)(s.h2,{id:"2-\u5b98\u65b9\u952e\u76d8\u63a7\u5236\u8282\u70b9\u6539\u53d8\u6d88\u606f\u7c7b\u578b",children:"2. \u5b98\u65b9\u952e\u76d8\u63a7\u5236\u8282\u70b9,\u6539\u53d8\u6d88\u606f\u7c7b\u578b"}),"\n",(0,t.jsxs)(s.p,{children:["\u53c2\u8003",(0,t.jsx)(s.a,{href:"https://docs.ros.org/en/ros2_packages/humble/api/teleop_twist_keyboard/",children:"https://docs.ros.org/en/ros2_packages/humble/api/teleop_twist_keyboard/"})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"ros2 run teleop_twist_keyboard teleop_twist_keyboard\n"})}),"\n",(0,t.jsxs)(s.p,{children:["\u5f03\u7528",":ros2"," run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true"]}),"\n",(0,t.jsx)(s.h3,{id:"\u8fd0\u884c\u952e\u76d8\u63a7\u5236\u8282\u70b9\u81ea\u5df1\u7f16\u5199",children:"\u8fd0\u884c\u952e\u76d8\u63a7\u5236\u8282\u70b9,\u81ea\u5df1\u7f16\u5199"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"cd sharkbot/chapt7_ws/\nsource install/setup.bash\nros2 run keyboard_teleop keyboard_teleop\n"})}),"\n",(0,t.jsx)(s.h2,{id:"3-\u8fd0\u884c\u5bfc\u822a",children:"3. \u8fd0\u884c\u5bfc\u822a"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"cd sharkbot/chapt7_ws/\nsource install/setup.bash\nros2 launch fishbot_navigation2 navigation2.launch.py\n"})}),"\n",(0,t.jsx)(s.h2,{id:"4-twist\u6d88\u606f\u8f6c\u6362--\u5c06\u952e\u76d8\u63a7\u5236\u5bfc\u822a\u7684\u6d88\u606f\u8f6c\u6362\u4e3a\u673a\u5668\u4eba\u63a7\u5236\u5668\u7684\u6d88\u606f\u6ce8\u610f\u8f6c\u6362\u7684\u987a\u5e8f\u5f88\u91cd\u8981",children:"4. twist\u6d88\u606f\u8f6c\u6362--\u5c06\u952e\u76d8\u63a7\u5236/\u5bfc\u822a\u7684\u6d88\u606f\u8f6c\u6362\u4e3a\u673a\u5668\u4eba\u63a7\u5236\u5668\u7684\u6d88\u606f(\u6ce8\u610f\u8f6c\u6362\u7684\u987a\u5e8f,\u5f88\u91cd\u8981)"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/joshnewans/twist_stamper",children:"https://github.com/joshnewans/twist_stamper"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"cd sharkbot/chapt7_ws/\nsource install/setup.bash\nros2 run twist_stamper twist_stamper --ros-args -r cmd_vel_in:=cmd_vel -r cmd_vel_out:=fishbot_tricycle_controller/cmd_vel\n"})}),"\n",(0,t.jsx)(s.h2,{id:"5-\u8fd0\u884c\u673a\u5668\u4eba\u6a21\u578b\u53c2\u8003\u5c0f\u9c7c\u7684\u6a21\u578b\u63a7\u5236\u5668\u53c2\u8003\u5b98\u65b9ros2_control",children:"5. \u8fd0\u884c\u673a\u5668\u4eba\u6a21\u578b,\u53c2\u8003\u5c0f\u9c7c\u7684\u6a21\u578b,\u63a7\u5236\u5668\u53c2\u8003\u5b98\u65b9ros2_control"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://gitee.com/ohhuo/ros2bookcode",children:"https://gitee.com/ohhuo/ros2bookcode"}),"\n",(0,t.jsx)(s.a,{href:"https://control.ros.org/master/doc/ros2_controllers/tricycle_controller/doc/userdoc.html",children:"https://control.ros.org/master/doc/ros2_controllers/tricycle_controller/doc/userdoc.html"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Rviz"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"cd sharkbot/chapt7_ws/\nsource install/setup.bash\nros2 launch fishbot_description display_robot.launch.py\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Gazebo"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"cd sharkbot/chapt7_ws/\nsource install/setup.bash\nros2 launch fishbot_description gazebo_sim.launch.py\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"slam\u5efa\u56fe"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"cd sharkbot/chapt7_ws/\nsource install/setup.bash\nros2 launch slam_toolbox online_async_launch.py use_sim_slam:=true\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"\u4fdd\u5b58\u5730\u56fe"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"cd sharkbot/chapt7_ws/fishbot_navigation2/maps/\nsource install/setup.bash\nros2 run nav2_map_server map_saver_cli -f room\n"})})]})}function d(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}}}]);