const inqueryButton = document.querySelector(".submitBtn");
const buildingTypeSelected = document.getElementsByName("buildingType");


//=================== checkbox에서 전체 선택시 하위 선택 전체선택/해제 하기 ===================================

// 생활시설 전체선택 체크/해제 설정
// '전체 선택' 체크박스의 참조를 얻습니다.
const facCommSelectAllCheckbox = document.querySelector('input[name="facCommAllSelected"]');

// '전체 선택' 체크박스의 이벤트 리스너를 등록합니다.
facCommSelectAllCheckbox.addEventListener('change', (e) => {
    // 모든 'facComm' 체크박스를 선택합니다.
    const facCommCheckboxes = document.querySelectorAll('input[name="facComm"]');

    facCommCheckboxes.forEach((checkbox) => {
        checkbox.checked = e.target.checked;
    });
});

// 각각의 'facComm' 체크박스에 이벤트 리스너를 등록합니다.
const facCommCheckboxes = document.querySelectorAll('input[name="facComm"]');
facCommCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        // 모든 'facComm' 체크박스가 체크되어 있는지 확인합니다.
        const facCommAllChecked = [...facCommCheckboxes].every((checkbox) => checkbox.checked);

        // '전체 선택' 체크박스의 상태를 업데이트합니다.
        facCommSelectAllCheckbox.checked = facCommAllChecked;
    });
});

// 보안시설 전체선택 체크/해제 설정
const facSecSelectAllCheckbox = document.querySelector('input[name="facSecAllSelected"]');

facSecSelectAllCheckbox.addEventListener('change', (e) => {
	const facSecCheckboxes = document.querySelectorAll('input[name="facSec"]');
	
	facSecCheckboxes.forEach((checkbox) => {
		checkbox.checked = e.target.checked;	
	});
});

const facSecCheckboxes = document.querySelectorAll('input[name="facSec"]');
facSecCheckboxes.forEach((checkbox) => {
	checkbox.addEventListener('change', () => {
		const facSecAllChecked = [...facSecCheckboxes].every((checkbox) => checkbox.checked);
		
		facSecSelectAllCheckbox.checked = facSecAllChecked;
	})
})
// =========================== 전용면적/공급면적 평과 평방미터 변환하기 ===================================
const exclusivePyeongInput = document.querySelector('.exclusiveP');
const exclusiveMeterInput = document.querySelector('.exclusiveM');
const supplyPyeongInput = document.querySelector('.supplyP');
const supplyMeterInput = document.querySelector('.supplyM');
const conversionRate = 3.305785;

exclusivePyeongInput.addEventListener('input', (e) => {
	exclusiveMeterInput.value =(e.target.value * conversionRate).toFixed(2);
});
exclusiveMeterInput.addEventListener('input', (e) => {
	exclusivePyeongInput.value = (e.target.value / conversionRate).toFixed(0);
});

supplyPyeongInput.addEventListener('input', (e) => {
	supplyMeterInput.value =(e.target.value * conversionRate).toFixed(2);
});
supplyMeterInput.addEventListener('input', (e) => {
	supplyPyeongInput.value = (e.target.value / conversionRate).toFixed(0);
});

// ========================== 방 수 입력시 방거실형태/방 특징 활성화 =============================
const roomCountInput = document.querySelector('.roomCount');
const livingRoomTypeInputs = document.querySelectorAll('.livingRoomTypeText');
const roomCharInputs = document.querySelectorAll('.roomCharText');

roomCountInput.addEventListener('input', (e) => {
	const isEnabled = e.target.value !=='' && e.target.value !== '0';
	
	livingRoomTypeInputs.forEach((input) => {
    input.disabled = !isEnabled;
    if (!isEnabled) {
      input.checked = false;
    }
  });
  
  roomCharInputs.forEach((input) => {
    input.disabled = !isEnabled;
    if (!isEnabled) {
      input.checked = false;
    }
  });
})
// =============================== 전세/월세 변경 ====================================
const tradeTypeInputs = document.querySelectorAll('.tradeTypeText');
const depositPriceInput = document.querySelector('.depositDiv');
const rentPriceInputs = document.querySelectorAll('.rentPriceDiv');

rentPriceInputs.forEach((input) => {
  input.style.display = 'none';
});

tradeTypeInputs.forEach((input) => {
  input.addEventListener('change', () => {
    if (input.value === 'tradeType1') { // 전세 선택 시
      depositPriceInput.style.display = 'block';
      rentPriceInputs.forEach((input) => {
        input.style.display = 'none';
      });
    } else if (input.value === 'tradeType2') { // 월세 선택 시
      depositPriceInput.style.display = 'none';
      rentPriceInputs.forEach((input) => {
        input.style.display = 'block';
      });
    }
  });
});
// ========================= 관리비 여부 ==========================
const managementFeeCheckboxes = document.querySelectorAll('.managementFeeCheckbox');
const managementFeeAmountInput = document.querySelector('.managementFeeText');

managementFeeCheckboxes.forEach((input) => {
	input.addEventListener('change', () => {
		if(input.value === 'managementFee1') {
			managementFeeAmountInput.disabled = true;
			managementFeeAmountInput.value = '';
		}
		else if (input.value === 'managementFee2') {
			managementFeeAmountInput.disabled = false;
		}
	});
});

// =====================주차 가능여부 체크박스 ====================
const parkingCheckboxes = document.querySelectorAll(".parkingAvailabilityCheckbox");
const parkingTextInput = document.querySelector(".parkingText");

parkingCheckboxes.forEach((input) => {
	input.addEventListener('change', () => {
		if(input.value === 'parkingAvailability1') {
			parkingTextInput.disabled = true;
			parkingTextInput.value = '';
		}
		else if (input.value === 'parkingAvailability2') {
			parkingTextInput.disabled = false;
		}
		
	});
});

// ====================================================================================
// ====================================================================================

// getData을 위한 변수 선언
const roomCount = document.querySelector(".roomCount"); // 방 수
const inputAddress = document.querySelectorAll(".inputAddress") // 주소
const inputExclusiveSizes = document.querySelectorAll(".exclusiveAreaText"); // 전용면적
const inputSupplySizesSizes = document.querySelectorAll(".supplyAreaText"); // 공급면적
const inputDepositText = document.querySelector(".depositText"); // 전세보증금
const inputMonthlyDeposit = document.querySelector(".rentPriceDepositText"); // 월세보증금
const inputMonthlyPrice = document.querySelector(".rentPriceMonthly"); // 월세
const inputCountBathroom = document.querySelector(".countBathroomText"); // 욕실 수
const inputCountParking = document.querySelector(".parkingText"); // 주차 가능 수
const inputDetailTitle = document.querySelector(".detailTitleText"); // 상세설명 제목
const inputDetailContext = document.querySelector(".detailContentText"); // 상세설명 내용


// =====================================================================================

// 매물등록 버튼 클릭
inqueryButton.onclick = () => {
	
	// 입력받은 데이터 저장
	let getDataRoomCount = roomCount.value; // 방수
	console.log(getDataRoomCount);
	
	let getDataInputAddress = { // 주소
		mainAddress: inputAddress[0].value,
		dong: inputAddress[1].value,
		ho: inputAddress[2].value
	}
	console.log(getDataInputAddress);
	
	let getDataExclusivesSize = { // 전용면적
		exclusiveP: inputExclusiveSizes[0].value, // 평
		exclusiveM: inputExclusiveSizes[1].value // 미
	}
	let getDataSupplySize = { // 공급면적
		supplyP: inputSupplySizesSizes[0].value, // 평
		supplyM: inputSupplySizesSizes[1].value // 미
	}
	console.log(getDataExclusivesSize);
	console.log(getDataSupplySize);
	
	let getDataPriceInfo = { // 매물가격 정보
		depositPrice: inputDepositText.value, // 전세가
		monthlyPriceDeposit: inputMonthlyDeposit.value, // 월세 - 보증금
		monthlyPrice: inputMonthlyPrice.value // 월세 
	};
	console.log(getDataPriceInfo);
	
	let getDataManagementFee = managementFeeAmountInput.value; // 관리비
	console.log(getDataManagementFee);
	
	let getDataCountBathroom = inputCountBathroom.value; // 욕실 수
	console.log(getDataCountBathroom);
	
	let getDataCountParking = inputCountParking.value; // 주차 가능 수
	console.log(getDataCountParking);
	
	let getDataDetailTitle = inputDetailTitle.value;
	console.log(getDataDetailTitle);
	let getDataDetailContext = inputDetailContext.value;
	console.log(getDataDetailContext);
	
	
	// radio 선택시, 
	// 매물유형 선택(주택/빌라)
	function getBuildingType() {
		const buildingTypes = document.getElementsByName('buildingType');
		let selectedType;
		let selectedTypeText;
		
		buildingTypes.forEach((type) => {
			if (type.checked) {
				selectedType = type.value;
				selectedTypeText = type.nextElementSibling.innerText;
			}
			
		});
		return selectedTypeText;
		
	}
	
	// 방 거실 형태 선택(오픈형/분리형)
	function getLinvigRoomType() {
		const livingRoomTypes = document.getElementsByName('livingRoomType');
		let selectedLivingRoomType;
		let selectedLivingRoomTypeText;
		
		livingRoomTypes.forEach((type) => {
			if(type.checked) {
				selectedLivingRoomType = type.value;
				selectedLivingRoomTypeText = type.nextElementSibling.innertext;
			}
		});
		return {
			type : selectedLivingRoomType,
			text : selectedLivingRoomTypeText
		};
	}
	
	// 거래 종류 선택(전/월세)
	function getTradeType() {
		const tradeTypes = document.getElementsByName('tradeType');
		let selectedTradeType;
		let selectedTradeTypeText;
		
		tradeTypes.forEach((type) => {
			if(type.checked) {
				selectedTradeType = type.value;
				selectedTradeTypeText = type.nextElementSibling.innerText;
			}
		});
		return {
			type: selectedTradeType,
			text: selectedTradeTypeText
		};
	}
	
	// 공용관리비(없음/있음)
	function getManagementFee() {
		const managementFees = document.getElementsByName('managementFee');
		let selectedManagementFee;
		let selectedManagementFeeText;
		
		managementFees.forEach((type) => {
			if(type.checked) {
				selectedManagementFee = type.value;
				selectedManagementFeeText = type.nextElementSibling.innerText;
			}
		});
		return {
			type: selectedManagementFee,
			text: selectedManagementFeeText
		};
	}
	
	// 입주가능여부(즉시입주/일자선택)
	function getpossibleMoveDate() {
		const possibleMoveDates = document.getElementsByName('possibleMoveDate');
		let selectedPossibleMoveDate;
		let selectePpossibleMoveDateText;
		
		possibleMoveDates.forEach((type) => {
			if(type.checked) {
				selectedPossibleMoveDate = type.value;
				selectePpossibleMoveDateText = type.nextElementSibling.innerText;
			}
		});
		return {
			type: selectedPossibleMoveDate,
			text: selectePpossibleMoveDateText
		};
	}
	
	// 엘리베이터 유/무
	function getElevator() {
		const elevatorType = document.getElementsByName('elevator');
		let selectedElevatorType;
		let selectedElevatorText;
		
		elevatorType.forEach((type) => {
			if(type.checked) {
				selectedElevatorType = type.value;
				selectedElevatorText = type.nextElementSibling.innerText;
			}
		});
		return {
			type: selectedElevatorType,
			text: selectedElevatorText
		};
	}
	
	// 주차가능여부
	function getParkingAvailability() {
		const parkingAvailabilityType = document.getElementsByName('parkingAvailability');
		let selectedParkingAvailabilityType;
		let selectedParkingAvailabilityText;
		
		parkingAvailabilityType.forEach((type) => {
			if(type.checked) {
				selectedParkingAvailabilityType = type.value;
				selectedParkingAvailabilityText = type.nextElementSibling.innerText;
			}
		});
		return {
			type: selectedParkingAvailabilityType,
			text: selectedParkingAvailabilityText
		};
	}
	
	// 난방시설
	function getHeatingType() {
		const heatingTypes = document.getElementsByName('heatingType');
		let selectedHeatingType;
		let selctedHeatingTypeText;
		
		heatingTypes.forEach((type) => {
			if(type.checked) {
				selectedHeatingType = type.value;
				selctedHeatingTypeText = type.nextElementSibling.innerText;
			}
		});
		return {
			tpye: selectedHeatingType,
			text: selctedHeatingTypeText
		}
	}
	
	// checkbox 선택시,
	
	// 방정보 - 방특징선택(신축/큰길가/반려동물)
	function getRoomChar() {
		const roomChars = document.getElementsByName('roomChar');
		let selectedRoomChars = [];
		
		roomChars.forEach((type, index) => {
			if(type.checked) {
				selectedRoomChars.push(index);
		}
		});
		return selectedRoomChars;
	}
	
	// 냉방시설
	function getAirCndType() {
		const airCndTypes = document.getElementsByName('airCndType');
		let selectedAirCndTypes = [];
		
		airCndTypes.forEach((type, index) => {
			if(type.checked) {
				selectedAirCndTypes.push(index);
			}
		});
		return selectedAirCndTypes;
	}
	
	// 생활시설
	function getFacComm() {
		const facComms = document.getElementsByName('facComm');
		let selectedFacComms = [];
		
		facComms.forEach((type, index) => {
			if(type.checked) {
				selectedFacComms.push(index);
			}
		});
		return selectedFacComms;
		
	}
	
	// 보안시설
	function getFacSec() {
		const facSecs = document.getElementsByName('facSec');
		let selectedFacSecs = [];
		
		facSecs.forEach((type, index) => {
			if(type.checked) {
				selectedFacSecs.push(index);
			}
		});
		return selectedFacSecs;
	}
	
	// 기타시설
	function getFacOther() {
		const facOthers = document.getElementsByName('facOther');
		let selectedFacOthers = [];
		
		facOthers.forEach((type, index) => {
			if(type.checked) {
				selectedFacOthers.push(index);
			}
		});
		return selectedFacOthers;
	}
	
	
	
	// checkbox 선택시 콘솔확인
	const selectedRoomChar = getRoomChar();
	console.log(selectedRoomChar);
	const selectedAirCndType = getAirCndType();
	console.log(selectedAirCndType);
	const selectedFacComm = getFacComm();
	console.log(selectedFacComm);
	const selectedFacSec = getFacSec();
	console.log(selectedFacSec);
	const selectedFacOtherType = getFacOther();
	console.log(selectedFacOtherType); 
	
	// radio 선택시 콘솔확인
	const selectedBuildingType = getBuildingType();
	console.log(selectedBuildingType); // 선택된 건물 유형을 콘솔에 출력합니다.
	const selectedLivingRoomType = getLinvigRoomType();
	console.log(selectedLivingRoomType)
	const selectedTradeType = getTradeType();
	console.log(selectedTradeType);
	const selectedManagementFee = getManagementFee();
	console.log(selectedManagementFee);
	const selectedPossibleMoveDate = getpossibleMoveDate();
	console.log(selectedPossibleMoveDate);
	const selectedElevator = getElevator();
	console.log(selectedElevator);
	const selectedParkingAvailability = getParkingAvailability();
	console.log(selectedParkingAvailability);
	const selectedHeatingType = getHeatingType();
	console.log(selectedHeatingType);
	
	// ====================================================================================

	// ajax
	let getData = {
		salesAddress: getDataInputAddress.mainAddress,
		salesSize: getDataExclusivesSize.exclusiveM,
		priceInfo: getDataPriceInfo.depositPrice,
		priceInfo: getDataPriceInfo.monthlyPrice,
		priceInfo: getDataPriceInfo.monthlyPriceDeposit,
		publicAdminFee: getDataManagementFee,
		numBathrooms: getDataCountBathroom,
		descTitle: getDataDetailTitle,
		descDetail: getDataDetailContext,
		salesType: selectedBuildingType,
		//parkingAvailability: getParkingAvailability(),
		//facAircnd: getAirCndType()
		//facComm: getFacComm()
	}
	console.log(getData);
	$.ajax({
		async: false,
		type: "post",
		url: "/api/v1/manage/content",
		contentType: "application/json",
		data: JSON.stringify(getData),
		dataType: "json",
		success: (response) => {
			console.log(response.data);
			alert("등록 완료");
		},
		error: (error) => {
			console.log(error);
		}
	})
	
}; // 매물등록버튼 inqueryButton.onclick() 여기까지.

//아래는 DB에서 불러올 때,

// 체크박스의 텍스트를 배열에 저장합니다.
const roomCharTextArray = []; // 방특징선택
	document.getElementsByName('roomChar').forEach((type) => {
		roomCharTextArray.push(type.nextElementSibling.innerText);
	});
	
const airCndTypeTextArray = []; // 냉방시설
	document.getElementsByName('airCndType').forEach((type) => {
		airCndTypeTextArray.push(type.nextElementSibling.innerText);
	});

const facCommTextArray = []; // 생화시설
	document.getElementsByName('facComm').forEach((type) => {
		facCommTextArray.push(type.nextElementSibling.innerText);
	});
	
const facSecTextArray = []; // 보안시설
	document.getElementsByName('facSec').forEach((type) => {
		facSecTextArray.push(type.nextElementSibling.innerText);
	});
	
const facOtherTextArray = []; // 기타시설
	document.getElementsByName('facOther').forEach((type) => {
		facOtherTextArray.push(type.nextElementSibling.innerText);
	});
	
// DB에서 인덱스를 가져온 뒤 해당 인덱스의 텍스트를 뿌립니다.	

function getRoomCharTextFromDB(indexesFromDB) { // 방특징 선택
	return indexesFromDB.map(index => roomCharTextArray[index]);
}

function getAirCndTextFromDB(indexesFromDB) { // 냉방시설
	return indexesFromDB.map(index => airCndTypeTextArray[index]);
}

function getFacCommTextFromDB(indexesFromDB) { // 생활시설
	return indexesFromDB.map(index => facCommTextArray[index]);
}
function getFacSecTextFromDB(indexesFromDB) { // 보안시설
	return indexesFromDB.map(index => facSecTextArray[index]);
}
function getFacOtherTextFromDB(indexesFromDB) { // 기타시설
	return indexesFromDB.map(index => facOtherTextArray[index]);
}

// 콘솔 확인 테스트를 위해 임의의 인덱스 배열을 사용.
console.log(getRoomCharTextFromDB([1,2]));
console.log(getAirCndTextFromDB([1, 2]));
console.log(getFacCommTextFromDB([18,19]));
console.log(getFacSecTextFromDB([6,7]));
console.log(getFacOtherTextFromDB([3,4]));

// ====================================================================================

