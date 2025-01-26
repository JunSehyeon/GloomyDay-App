import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import SearchBox from "../../common/component/SearchBox";
import NewItemDialog from "./component/NewItemDialog";
import ProductTable from "./component/ProductTable";
import {
  getProductList,
  deleteProduct,
  setSelectedProduct,
} from "../../features/product/productSlice";

const AdminProductPage = () => {
  const navigate = useNavigate();
  const [query] = useSearchParams();
  const dispatch = useDispatch();
  const { productList, totalPageNum } = useSelector((state) => state.product);
  const [showDialog, setShowDialog] = useState(false);
  const [searchQuery, setSearchQuery] = useState({
    page: query.get("page") || 1,
    name: query.get("name") || "",
  }); // 검색 조건들을 저장하는 객체

  const [mode, setMode] = useState("new");

  const tableHeader = ["#", "Sku", "Name", "Price", "Stock", "Image", "Status", ""];

  useEffect(() => {
    // 검색어나 페이지가 바뀌면 URL 변경 및 상품 리스트 가져오기
  }, [searchQuery]);

  const deleteItem = (id) => {
    // 아이템 삭제
  };

  const openEditForm = (product) => {
    // 수정 모드 설정 및 다이얼로그 열기
  };

  const handleClickNewItem = () => {
    // 신규 모드 설정 및 다이얼로그 열기
  };

  const handlePageClick = ({ selected }) => {
    // 페이지 변경 처리
  };

  return (
    <div className="flex flex-col items-center bg-black text-gray-200 min-h-screen">
      <Container className="w-full max-w-5xl">
        <div className="mt-6">
          <SearchBox
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            placeholder="Search by product name"
            field="name"
          />
        </div>
        <Button
          variant="light"
          onClick={handleClickNewItem}
        >
          Add New Item +
        </Button>

        <ProductTable
          header={tableHeader}
          data=""
          deleteItem={deleteItem}
          openEditForm={openEditForm}
        />
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={100}
          forcePage={searchQuery.page - 1}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination justify-center mt-4"
          activeClassName="bg-gray-700 text-white rounded"
        />
      </Container>

      <NewItemDialog
        mode={mode}
        showDialog={showDialog}
        setShowDialog={setShowDialog}
      />
    </div>
  );
};

export default AdminProductPage;
