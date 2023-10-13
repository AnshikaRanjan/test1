// Function Component

export function Header(){
    return(
        <div>
            <h1> Hello Header </h1>
        </div>
    );
}

export function Footer(){
    return(
        <div>
            <h1> 
                Hello Footer
            </h1>
        </div>
    )
}

export function Details(prop){
    return(
        <div>
            <h2> Hello {prop.name} </h2>
        </div>
    );
}