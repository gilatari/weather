(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{33:function(e,t,a){e.exports=a(67)},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(29),o=a.n(i);a(38),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=a(30),s=a(11),l=a(4),m=a(5),u=a(8),h=a(6),d=a(7),v=(a(39),a(40),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).componentToShow=function(e,t){a.setState({componentName:t}),a.props.switchComponent(t)},a.state={componentName:"Home"},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"navBar"},c.a.createElement("div",{className:"title"}," Herolo Weather Task "),c.a.createElement("div",{className:"nav-buttons"},c.a.createElement("div",{className:"link",onClick:function(t){return e.componentToShow(t,"Home")}},"Home"),c.a.createElement("div",{className:"link",onClick:function(t){return e.componentToShow(t,"Favorites")}},"Favorites")))}}]),t}(c.a.Component)),p=a(13),y=(a(41),a(42),a(14)),f=a.n(y),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).suggestion=a.suggestion.bind(Object(p.a)(a)),a.ApiKey="s1501FHB0B7WamEnzbjC3cLSRugkTyKx",a.locationsUrl="http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey="+a.ApiKey+"&q",a.state={currentCity:[],weeklyWeather:[],showing:!0},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"suggestion",value:function(e){var t=this;f.a.get(this.locationsUrl+"="+e.target.value).then((function(e){void 0!==e&&void 0!==e.data[0]&&(t.setState({currentCity:e.data}),t.setState({showing:!0}))})).catch((function(e){console.log(e)})).finally((function(){}))}},{key:"onSelected",value:function(e,t){this.setState({showing:!this.state.showing}),this.props.onSelectCity(e,t)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"autocomplete"},c.a.createElement("div",{className:"magnifying-glass"},c.a.createElement("span",{role:"img"},"\ud83d\udd0d")),c.a.createElement("input",{placeholder:"City",onKeyUpCapture:this.suggestion.bind(this)}),c.a.createElement("div",{className:"cities"},this.state.showing?c.a.createElement("div",null,this.state.currentCity.map((function(t){return c.a.createElement("div",{className:"city-name",key:t.Key,onClick:function(a){return e.onSelected(a,t)}},t.LocalizedName)}))):null))}}]),t}(c.a.Component),w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleAccuweather=function(e,t){var n=Object(p.a)(a);f.a.get(n.weatherForecastUrl+t.Key+"?apikey="+n.ApiKey+"&details=false&metric=true").then((function(e){n.setState({location:t}),n.setState({cityName:t.LocalizedName}),n.setState({weeklyWeather:e.data.DailyForecasts}),n.setState({headline:e.data.Headline.Text})}))},a.addToFavorites=function(){localStorage.setItem(a.state.location.LocalizedName,a.state.location.Key)},a.ApiKey="s1501FHB0B7WamEnzbjC3cLSRugkTyKx",a.weatherForecastUrl="http://dataservice.accuweather.com/forecasts/v1/daily/5day/",a.daysOfWeek=["Sun","Mon","Tue","Wed","Thu"],a.state={weeklyWeather:[],cityName:"",headline:"",location:{}},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"home-autocomplete"},c.a.createElement(E,{onSelectCity:this.handleAccuweather})),c.a.createElement("div",{className:"accuweatherWeekly"},this.state.weeklyWeather.length>0?c.a.createElement("div",{className:"weekly-weather"},c.a.createElement("div",{className:"selected-city-box"},c.a.createElement("div",{className:"city-header left"},c.a.createElement("div",{className:"inner-box"},c.a.createElement("div",{className:"selected-city-button"},"\u2612"),c.a.createElement("div",{className:"selected-city"},c.a.createElement("h4",null,this.state.cityName),c.a.createElement("h4",null,this.state.weeklyWeather[0].Temperature.Minimum.Value,"\xb0c")))),c.a.createElement("div",{className:"city-header right"},c.a.createElement("div",{className:"inner-box"},c.a.createElement("span",null,"\u2661"),c.a.createElement("span",{onClick:this.addToFavorites},"Add to Favorites")))),c.a.createElement("h2",null,this.state.headline),this.state.weeklyWeather.map((function(t,a){return c.a.createElement("div",{className:"daily-weather",key:a},c.a.createElement("h3",null,e.daysOfWeek[a]),"Minimum:",t.Temperature.Minimum.Value,"\xb0c Maximum:",t.Temperature.Maximum.Value,"\xb0c")}))):null))}}]),t}(c.a.Component),b=(a(60),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={favoritesCities:[[]],citiesToShow:[]},a.ApiKey="s1501FHB0B7WamEnzbjC3cLSRugkTyKx",a.weatherForecastUrl="http://dataservice.accuweather.com/currentconditions/v1/",a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"allStorage",value:function(){for(var e=[],t=Object.keys(localStorage),a=t.length;a--;)e.push(localStorage.getItem(t[a]));return e}},{key:"componentDidMount",value:function(){this.setState({favoritesCities:Object.entries(localStorage)});var e=this;this.allStorage().forEach((function(t){f.a.get(e.weatherForecastUrl+t+"?apikey="+e.ApiKey).then((function(t){var a=e.state.citiesToShow;a.push(t.data[0]),e.setState({citiesToShow:a})}))}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"favorites"},this.state.citiesToShow.map((function(t,a){return c.a.createElement("div",{className:"daily-weather",key:a},c.a.createElement("h3",null,e.state.favoritesCities[a][0]),c.a.createElement("div",null," ",t.WeatherText," "),c.a.createElement("div",null," ",t.Temperature.Metric.Value,"\xb0c"))})))}}]),t}(c.a.Component)),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).onSwitchComponent=function(e){a.setState({componentToRender:e})},a.state={componentToRender:"Home"},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"app"},c.a.createElement("header",{className:"app-header"},c.a.createElement(v,{switchComponent:this.onSwitchComponent})),c.a.createElement("div",{className:"app-body"},"Home"===this.state.componentToRender?c.a.createElement(w,null):c.a.createElement(b,null)))}}]),t}(c.a.Component),g=(a(61),c.a.Component,c.a.createElement(r.a,null,c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/",component:k}))));o.a.render(g,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.a9e28c37.chunk.js.map