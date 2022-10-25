import style from './Badge.module.css'

interface props{
    children: React.ReactNode
    fill?:boolean,
    pointer?:boolean,
    size?:string
}

export function Badge({children, fill, pointer, size='20px'}:props){
    const color = '#FFC300'
    
    return (
        <span className={fill ? style.fill : style.nonFill}
        style={{
            cursor: pointer ? 'pointer': '',
            backgroundColor: fill ? color : '',
            fontSize: size
          }} >
            {children}
        </span>
    )
}