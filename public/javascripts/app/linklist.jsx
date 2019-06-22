
const element = <p>
                  <a href="http://www.xinhuanet.com/english/2019-06/12/c_138137970.htm" target="if_src">
                    Senior political advisors study Xi's remarks on united front work
                  </a>
                </p>

const domContainer = document.querySelector('#linksfeed');


class XhEventList extends React.Component {
    render() {
        return element
    }
}

ReactDOM.render(<XhEventList/>, domContainer);
