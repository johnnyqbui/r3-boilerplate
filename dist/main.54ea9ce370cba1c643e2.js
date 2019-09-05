(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{51:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(23),o=n(13),c=n(10),i=n(29);const m="ADD_INITIAL_LOAD",u="INCREMENT_COUNTER",s={loading:!1,counter:0};var p=Object(c.c)({sample:(e=s,t)=>{switch(t.type){case"ADD_INITIAL_LOAD_PROGRESS":return{...e,loading:!0};case"ADD_INITIAL_LOAD_COMPLETE":return{...e,loading:!1};case"INCREMENT_ONE":return{...e,counter:e.counter+1};default:return e}}}),d=n(6);const E=()=>({type:"ADD_INITIAL_LOAD_PROGRESS"}),b=()=>({type:"ADD_INITIAL_LOAD_COMPLETE"}),h=()=>({type:"INCREMENT_ONE"});function*f(){yield Object(d.b)(E()),yield Object(d.b)(b())}function*O(){yield Object(d.b)(h())}var I=[Object(d.a)(function*(){yield Object(d.c)(m,f)}),Object(d.a)(function*(){yield Object(d.d)(u,O)})];const _=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d,y=Object(i.a)(),g=Object(c.e)(p,_(Object(c.a)(y)));y.run(function*(){yield[...I]});var N=g,v=n(25),A=n(9);var C=A.a`
  html,
  body {
    height: 100%;
    width: 100%;
  }
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  #app {
    background-color: #fff;
    min-height: 100%;
    min-width: 100%;
  }
  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`,D=n(15),w=n(4),T=n.n(w);class L extends r.a.Component{constructor(e){super(e),this.state={error:null,errorInfo:null}}componentDidCatch(e,t){this.setState({error:e,errorInfo:t})}render(){return this.state.errorInfo?r.a.createElement("div",null,r.a.createElement("div",{style:{whiteSpace:"pre-wrap"}},this.state.error&&this.state.error.toString(),r.a.createElement("br",null),this.state.errorInfo.componentStack)):this.props.children}}L.propTypes={children:T.a.node.isRequired};class S extends r.a.Component{render(){return r.a.createElement("div",null,r.a.createElement("p",null,"Looks good"))}}var j=A.b.h1.withConfig({displayName:"H1",componentId:"tvtt5e-0"})(["font-size:32px"]);var x=Object(o.b)(null,{addInitialLoad:()=>({type:m})})(class extends a.Component{componentDidMount(){this.props.addInitialLoad()}render(){return console.log(this.props),r.a.createElement("section",null,r.a.createElement(j,null,"Welcome to the home page"),r.a.createElement(L,null,r.a.createElement(S,null)))}}),R=n(11),M=n.n(R),P=A.b.button.withConfig({displayName:"Button",componentId:"sc-183brz3-0"})(["padding:5px"]);var k=Object(o.b)(e=>({counter:e.sample.counter}),{incrementCounter:()=>({type:u})})(e=>{return M.a.createElement("section",null,M.a.createElement(M.a.Fragment,null,M.a.createElement(j,null,"About Page"),M.a.createElement(P,{onClick:()=>{e.incrementCounter()}},"Increment"),M.a.createElement("p",null,"Current Count: ",e.counter)))}),H=()=>r.a.createElement("div",null,r.a.createElement("p",null,"Not Found Page"));var G=()=>r.a.createElement(D.b,null,r.a.createElement(x,{path:"/"}),r.a.createElement(k,{path:"/about"}),r.a.createElement(H,{default:!0}));var z=()=>r.a.createElement("div",null,r.a.createElement(D.a,{to:"/about"},"Go to about"),r.a.createElement(D.a,{to:"/contact"},"Go to contact"));const B=A.b.div.withConfig({displayName:"App__AppWrapper",componentId:"sc-1hbuhus-0"})(["max-width:calc(768px + 16px * 2);margin:10px auto;display:flex;min-height:100%;padding:0 16px;flex-direction:column;"]);var F=()=>r.a.createElement(B,null,r.a.createElement(v.Helmet,{titleTemplate:"%s - Sample",defaultTitle:"Sample"},r.a.createElement("meta",{name:"description",content:"Sample content"})),r.a.createElement(G,null),r.a.createElement(z,null),r.a.createElement(C,null));Object(l.render)(r.a.createElement(o.a,{store:N},r.a.createElement(F,null)),document.getElementById("app"))}},[[51,1,2]]]);