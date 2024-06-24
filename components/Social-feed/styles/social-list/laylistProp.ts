export const layoutCss = `
.layout_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: rgb(243, 243, 242);
    border-radius: 8px;
    padding: 10px;
}
    
.layou†_item_detail {
    text-align: center;
    padding: 5px;
    font-weight: 400;
    cursor: pointer;
    border: 1px solid rgb(243, 243, 242);
}

.item_selected {
    color: rgb(20, 148, 255);
    border: 1px solid rgb(20, 148, 255);
    border-radius: 4px;
    font-weight: 600;
}


.grid_layout {
    display: grid;
    gap: 20px;
}


.btn_customize {
    border-top: 1px solid #3a3a3c;
    color: rgb(20, 148, 255);
    cursor: pointer;
    width: 100%;
    text-align: center;
    padding-top: 10px;
    font-size: 14px;
    font-weight: 600;
}


`;
