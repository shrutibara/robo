function List(props){
    return props.userlist.map((elem)=>{
        return (<>
       <div className="ro"> <img src={`https://robohash.org/${elem.id}?200x200/`}></img>
         <li>{elem.name}</li>
        <li>{elem.email}</li>
        </div>
        </>)
    })
}
export default List;