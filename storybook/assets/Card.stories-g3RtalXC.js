import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{W as n,g as r,i,r as a}from"./iframe-onLhmBvk.js";import{n as o,t as s}from"./dist-DYjIqjVM.js";import{n as c,t as l}from"./button-BP2ar9eY.js";var u,d=e((()=>{o(),u=s(`rounded-xl border bg-card text-card-foreground shadow-sm transition-all duration-300`,{variants:{hover:{true:`hover:shadow-md hover:-translate-y-1`},variant:{default:`bg-card`,secondary:`bg-secondary/50`,ghost:`border-none shadow-none`}},defaultVariants:{variant:`default`}})})),f,p,m,h,g,_,v,y,b=e((()=>{f=t(n(),1),i(),d(),p=r(),m=f.forwardRef(({className:e,variant:t,hover:n,...r},i)=>(0,p.jsx)(`div`,{ref:i,className:a(u({variant:t,hover:n,className:e})),...r})),m.displayName=`Card`,h=f.forwardRef(({className:e,...t},n)=>(0,p.jsx)(`div`,{ref:n,className:a(`flex flex-col space-y-1.5 p-6`,e),...t})),h.displayName=`CardHeader`,g=f.forwardRef(({className:e,...t},n)=>(0,p.jsx)(`h3`,{ref:n,className:a(`text-2xl font-semibold leading-none tracking-tight`,e),...t})),g.displayName=`CardTitle`,_=f.forwardRef(({className:e,...t},n)=>(0,p.jsx)(`p`,{ref:n,className:a(`text-sm text-muted-foreground`,e),...t})),_.displayName=`CardDescription`,v=f.forwardRef(({className:e,...t},n)=>(0,p.jsx)(`div`,{ref:n,className:a(`p-6 pt-0`,e),...t})),v.displayName=`CardContent`,y=f.forwardRef(({className:e,...t},n)=>(0,p.jsx)(`div`,{ref:n,className:a(`flex items-center p-6 pt-0`,e),...t})),y.displayName=`CardFooter`,m.__docgenInfo={description:``,methods:[],displayName:`Card`},h.__docgenInfo={description:``,methods:[],displayName:`CardHeader`},g.__docgenInfo={description:``,methods:[],displayName:`CardTitle`},_.__docgenInfo={description:``,methods:[],displayName:`CardDescription`},v.__docgenInfo={description:``,methods:[],displayName:`CardContent`},y.__docgenInfo={description:``,methods:[],displayName:`CardFooter`}})),x=e((()=>{b(),d()})),S,C,w,T,E,D;e((()=>{x(),l(),S=r(),C={title:`UI/Card`,component:m,tags:[`autodocs`]},w={render:()=>(0,S.jsxs)(m,{className:`w-[350px]`,children:[(0,S.jsxs)(h,{children:[(0,S.jsx)(g,{children:`Create project`}),(0,S.jsx)(_,{children:`Deploy your new project in one-click.`})]}),(0,S.jsx)(v,{children:(0,S.jsx)(`div`,{className:`flex flex-col space-y-4`,children:(0,S.jsx)(`p`,{className:`text-sm text-foreground/80`,children:`This is a sample card content area where you can place anything.`})})}),(0,S.jsxs)(y,{className:`flex justify-between`,children:[(0,S.jsx)(c,{variant:`outline`,children:`Cancel`}),(0,S.jsx)(c,{children:`Deploy`})]})]})},T={render:()=>(0,S.jsxs)(m,{hover:!0,className:`w-[350px] cursor-pointer`,children:[(0,S.jsxs)(h,{children:[(0,S.jsx)(g,{children:`Interactive Card`}),(0,S.jsx)(_,{children:`This card has a hover effect.`})]}),(0,S.jsx)(v,{children:(0,S.jsx)(`p`,{className:`text-sm`,children:`Hover over me to see the animation.`})})]})},E={render:()=>(0,S.jsxs)(m,{variant:`secondary`,className:`w-[350px]`,children:[(0,S.jsx)(h,{children:(0,S.jsx)(g,{children:`Secondary Variant`})}),(0,S.jsx)(v,{children:(0,S.jsx)(`p`,{className:`text-sm`,children:`Subtle background for less emphasis.`})})]})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <p className="text-sm text-foreground/80">
            This is a sample card content area where you can place anything.
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Card hover className="w-[350px] cursor-pointer">
      <CardHeader>
        <CardTitle>Interactive Card</CardTitle>
        <CardDescription>This card has a hover effect.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Hover over me to see the animation.</p>
      </CardContent>
    </Card>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <Card variant="secondary" className="w-[350px]">
      <CardHeader>
        <CardTitle>Secondary Variant</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Subtle background for less emphasis.</p>
      </CardContent>
    </Card>
}`,...E.parameters?.docs?.source}}},D=[`Default`,`WithHover`,`Secondary`]}))();export{w as Default,E as Secondary,T as WithHover,D as __namedExportsOrder,C as default};