export type NavLinkArrayTypes = {
    /** ссылка на страницу, для nav в шапке Header   */
    href: string
    /** id  строки , для key */
    id: number
    /** название строки */
    name: string
}

export type PublicHeaderTypes = {
    /** функция логина */
    handleLogout?: () => void
}

export type PopupProfileTypes = {
    /** функция логина */
    handleLogout?: () => void
}
