const updatePageTitle = (pageIndex) => {
    let pageTitle = ''
    let references = ''
    let footerName = ''
    if (pageIndex >= 1) {
        pageTitle = 'Kameratracking'
        footerName = ''
        // references = '[5,6] [7]'
    }
    if (pageIndex >= 3) references = '[1]'
    if (pageIndex >= 5) references = '[2] [3] [4]'
    if (pageIndex >= 6) references = '[5]'
    // if (pageIndex >= 10) pageTitle = 'Fazit'
    // if (pageIndex === 11) pageTitle = ''
    // if (pageIndex >= 12) pageTitle = 'Quellen'
    if (pageIndex >= 8) {
        pageTitle = ""
        footerName = ""
    }

    document.getElementById('title').innerHTML = pageTitle
    document.getElementById('references').innerHTML = references
    document.getElementById('footername').innerHTML = footerName
}

export default updatePageTitle
