import{n as e}from"./chunk-zsgVPwQN.js";import{g as t,n,t as r}from"./iframe-onLhmBvk.js";import{n as i,t as a}from"./button-BP2ar9eY.js";var o=e((()=>{r()})),s,c,l,u;e((()=>{o(),a(),s=t(),c={title:`UI/Toast`,tags:[`autodocs`]},l={render:()=>{let{toast:e}=n();return(0,s.jsxs)(`div`,{className:`flex flex-wrap gap-4`,children:[(0,s.jsx)(i,{onClick:()=>e({type:`success`,title:`Success`,description:`Your action was completed successfully.`}),children:`Success Toast`}),(0,s.jsx)(i,{variant:`destructive`,onClick:()=>e({type:`error`,title:`Error occurred`,description:`We could not save your settings at this time.`}),children:`Error Toast`}),(0,s.jsx)(i,{variant:`secondary`,onClick:()=>e({type:`warning`,title:`Connection reset`,description:`The connection was interrupted but we are retrying.`}),children:`Warning Toast`}),(0,s.jsx)(i,{variant:`outline`,onClick:()=>e({type:`info`,title:`Update available`,description:`A newer version of the library is available now.`}),children:`Info Toast`})]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      toast
    } = useToast();
    return <div className="flex flex-wrap gap-4">
        <Button onClick={() => toast({
        type: "success",
        title: "Success",
        description: "Your action was completed successfully."
      })}>
          Success Toast
        </Button>
        <Button variant="destructive" onClick={() => toast({
        type: "error",
        title: "Error occurred",
        description: "We could not save your settings at this time."
      })}>
          Error Toast
        </Button>
        <Button variant="secondary" onClick={() => toast({
        type: "warning",
        title: "Connection reset",
        description: "The connection was interrupted but we are retrying."
      })}>
          Warning Toast
        </Button>
        <Button variant="outline" onClick={() => toast({
        type: "info",
        title: "Update available",
        description: "A newer version of the library is available now."
      })}>
          Info Toast
        </Button>
      </div>;
  }
}`,...l.parameters?.docs?.source}}},u=[`Default`]}))();export{l as Default,u as __namedExportsOrder,c as default};