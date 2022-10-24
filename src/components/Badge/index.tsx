import style from './Badge.module.css'
export function Badge({children, fill}:any){
    interface props{
        fill?:boolean
    }
    return (
        <span className={fill ? style.fill : style.nonFill}>
            {children}
        </span>
    )
}