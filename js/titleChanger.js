const updatePageTitle = (pageIndex) => {
    let pageTitle = ''
    let references = ''
    let footerName = ''
    if (pageIndex >= 1) {
        pageTitle = 'Kameratracking'
        footerName = ''
        // references = '[5,6] [7]'
    }
    // if (pageIndex >= 4) {
    //     pageTitle = ''
    //     // references = '[5,6] [7]'
    // }
    // if (pageIndex >= 4) pageTitle = 'Inhalt 3'
    // if (pageIndex >= 10) pageTitle = 'Fazit'
    // if (pageIndex === 11) pageTitle = ''
    // if (pageIndex >= 12) pageTitle = 'Quellen'
    if (pageIndex >= 9) {
        pageTitle = ""
        footerName = ""
    }

    document.getElementById('title').innerHTML = pageTitle
    document.getElementById('references').innerHTML = references
    document.getElementById('footername').innerHTML = footerName
}

export default updatePageTitle
