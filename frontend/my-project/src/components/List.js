import React , {Component} from 'react';
import Register from './Register';


class List extends Component{
    constructor(props) {
        super(props);
        this.state = {
          items:[],
          isloaded: false,
        };
      }

      componentDidMount() { //Fetch Data from books API
        fetch('https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=RArQ4BcZtI5UhNXRySF4FwOWqRQStsKz')
          .then(response => response.json())
          .then(json => this.setState({ isloaded: true, items: json.results.lists, }));
        
      }

      render() {//display Data from API to HTML 
        var { isloaded, items} = this.state;
        console.log(items);
    
        if(!isloaded){
          return(<div>loading...</div>);
        }
    
          else{
    
          return(
           
            <div className="listdisplay">
                  
            <h2> Lists Of books</h2>
      
            {
            items.map(item=>
          <div key={item.list_id}>
      
           <img src={item.list_image} width= {100}></img> 
            <h3>{item.list_name} List</h3>
           { item.books.map(book=>
    <div key={book.rank}>
      <h3>{book.title}</h3>
      <img src={book.book_image} width={250}></img>
      <span>{book.author}</span><span>{book.description}</span><a href={book.book_uri}>visit this book</a>
      <a href={book.amazon_product_url}>Amazon Url</a>
      <div>
          <h4>Buy Links</h4>
          <ul>
          {book.buy_links.map(link=>
            <li key={link.url}> <a  href={link.url}>{link.name}</a></li>

            )}</ul>
         
      </div> </div> )}
           </div>)} </div>
  
    
      );}}



}
export default List;