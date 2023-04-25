// 첫번째 모달 관련 변수
var writeModal = document.getElementById("write-modal");
var btnWrite = document.querySelector(".boardPage-write");
var span = document.getElementsByClassName("close")[0];
var inputPhoto = document.getElementById("photo");
var photoPreview = document.getElementById("photo-preview");

var photoList = [];

// 두번째 모달 관련 변수
var btnPhoto = document.querySelector(".AddPhoto");
var spanTwo = document.getElementsByClassName("close")[2];
var modalImage = document.getElementById("myModal");
var inputPhoto1 = document.getElementById("photo1");
var AddphotoPreview = document.getElementById("Addphoto-preview");

// 첫번째 모달 클릭 이벤트
btnWrite.onclick = function() {
  writeModal.style.display = "block";
  updatePhotoPreview(photoPreview, inputPhoto);
  // 모달 외부 영역 클릭 시 모달 닫기
  window.onclick = function(event) {
    if (event.target == writeModal) {
      writeModal.style.display = "none";
      inputPhoto.value = "";
      photoPreview.innerHTML = "";
    }
  }
};

// 두번째 모달 클릭 이벤트
btnPhoto.onclick = function() {
  modalImage.style.display = "block";
  updatePhotoPreview(AddphotoPreview, inputPhoto1);
  // 모달 외부 영역 클릭 시 모달 닫기
  window.onclick = function(event) {
    if (event.target == modalImage) {
      modalImage.style.display = "none";
      inputPhoto1.value = "";
      AddphotoPreview.innerHTML = "";
    }
  }
};

function updatePhotoPreview(e, a) {
  e.innerHTML = "";
  photoList = [];

  var files = a.files;
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var reader = new FileReader();
    reader.onload = function(event) {
      var img = document.createElement("img");
      img.setAttribute("src", event.target.result);
      img.setAttribute("width", "300");
      photoList.push(file);

      var closeButton = document.createElement("button");
      closeButton.innerHTML = "삭제";

      closeButton.addEventListener("click", function(event) {
        var targetImg = event.target.previousSibling;
        var targetIndex = Array.from(targetImg.parentNode.children).indexOf(targetImg);
        photoList.splice(targetIndex, 1);
        targetImg.parentNode.removeChild(targetImg);
        event.target.parentNode.removeChild(event.target);

        // 이미지가 남아있으면 input 태그의 값을 업데이트하고, 선택 상태를 갱신
        if (photoList.length > 0) {
          var newFilesList = new DataTransfer();
          for (var i = 0; i < photoList.length; i++) {
            newFilesList.items.add(photoList[i]);
          }
          a.files = newFilesList.files;
          a.value = "이미지 " + photoList.length + "개 선택됨";
        } else {
          a.value = "";
        }
      });

      e.appendChild(img);
      e.appendChild(closeButton);
    };
    reader.readAsDataURL(file);
  }
}

// 파일 선택 후에 파일 개수 갱신
inputPhoto.addEventListener("change", function() {
    updatePhotoPreview(photoPreview, inputPhoto); // 이미지 미리보기 갱신
});

inputPhoto1.addEventListener("change", function() {
    updatePhotoPreview(AddphotoPreview, inputPhoto1); // 이미지 미리보기 갱신
});

// 첫번째 모달 닫기
span.onclick = function () {
  writeModal.style.display = "none";

};

spanTwo.onclick = function () {
    modalImage.style.display = "none";

};

// 이미지 클릭시 모달창 부분
var imageListModal = document.getElementById("ModalList");
var modalImg = document.querySelector(".modal-content1 .Image-style");
var spanOne = document.getElementsByClassName("close")[1];
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");
var boardimageBtn = document.querySelectorAll(".boardImg-wrapper");
var imgList = document.querySelectorAll(".modal-content1 .Image-style");
var currentIdx = 0;

function openModal() {
    imageListModal.style.display = "block";
  }

// 이전, 다음 이미지 보여주기
prevBtn.onclick = function() {
  currentIdx--;
  if (currentIdx < 0) {
    currentIdx = imgList.length - 1;
  }
  modalImg.src = imgList[currentIdx].src;
}

nextBtn.onclick = function() {
  currentIdx++;
  if (currentIdx >= imgList.length) {
    currentIdx = 0;
  }
  modalImg.src = imgList[currentIdx].src;
}

// 모달창 닫기
spanOne.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
