exports.pagination = (data) => {
    const { numberOfRecords, page, total } = data;
    let remainingRecords = (total - ((page * numberOfRecords) + numberOfRecords)) < 0 ? 0 : (total - ((page * numberOfRecords) + numberOfRecords));

    return {
        currentPage: page + 1,
        remainingPages: Math.ceil(remainingRecords / numberOfRecords),
        totalPages: Math.ceil(total / numberOfRecords),
        remainingRecords
    }
}