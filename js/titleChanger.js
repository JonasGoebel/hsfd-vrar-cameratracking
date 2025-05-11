const updatePageTitle = (pageIndex) => {
    let pageTitle = ''
    let references = ''
    let footerName = ''
    if (pageIndex >= 1) {
        pageTitle = 'Kameratracking'
        footerName = 'Jonas Göbel, Omar Schure'
    }
    if (pageIndex >= 3) references = '[1]'
    if (pageIndex >= 5) references = '[2] [3] [4]'
    if (pageIndex >= 6) references = '[5]'
    if (pageIndex >= 7) references = '[6]'
    if (pageIndex >= 8) references = '[8]'
    if (pageIndex >= 9) references = '[7]'
    if (pageIndex >= 10) references = ''
    if (pageIndex == 11) references = '[9]'
    if (pageIndex >= 12) {
        pageTitle = ""
        footerName = ""
    }

    document.getElementById('title').innerHTML = pageTitle
    document.getElementById('references').innerHTML = references
    document.getElementById('footername').innerHTML = footerName
}

export default updatePageTitle
