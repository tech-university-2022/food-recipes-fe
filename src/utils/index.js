export const createPages = ({ page, numPages, maxItem = 3 }) => {
    let pages = [page];
    maxItem = maxItem - 1;
    let left = maxItem / 2;
    let right = maxItem - left;
    if (page > 1) {
        let i = 1;
        while (i < left && page - i > 1) {
            pages.unshift(page - i);
            i++;
        }
        if (page - i >= 1) {
            if (page - i >= 2) {
                pages.unshift("...");
            }
            pages.unshift("1");
        }
    }
    if (page < numPages) {
        let i = 1;
        while (i < right && page + i < numPages) {
            pages.push(page + i);
            i++;
        }
        if (page + i <= numPages) {
            if (page + i <= numPages - 1) {
                pages.push("...");
            }
            pages.push(numPages);
        }
    }
    return pages;
}