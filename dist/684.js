(window.webpackJsonp_bit_module_federation_app3=window.webpackJsonp_bit_module_federation_app3||[]).push([[684],{684:(e,t,n)=>{"use strict";n.r(t);var o=n(104),a=n.n(o);const s=a().lazy(()=>n.e(991).then(n.t.bind(n,991,7))),l=a().lazy(()=>n.e(874).then(n.t.bind(n,874,7)));class i extends a().Component{constructor(e){super(e),this.state={view:1},this.bookTheRoom=this.bookTheRoom.bind(this)}bookTheRoom(){this.setState({view:2})}render(){const{view:e}=this.state;let t=a().createElement(a().Suspense,{fallback:"Loading app1"},a().createElement(s,{onClick:this.bookTheRoom}));return 2===e&&(t=a().createElement(a().Suspense,{fallback:"Loading app2"},a().createElement(l,null))),a().createElement(a().Fragment,null,a().createElement("h1",null,"This is app3"),t)}}var r=n(871);n.n(r)().render(a().createElement(i,null),document.getElementById("root"))}}]);