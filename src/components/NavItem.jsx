function NavItem(props){
    return (
        <div className="NavItem">
            {props.icon}
            <span className={props.selected ? "selected" : ""}>{props.text}</span>
        </div>
    )
}

export default NavItem;