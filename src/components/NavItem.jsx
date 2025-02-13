function NavItem(props){
    return (
        <div className="NavItem">
            <img src={props.img} height={32} width={32} />
            <span className={props.selected ? "selected" : ""}>{props.text}</span>
        </div>
    )
}

export default NavItem;