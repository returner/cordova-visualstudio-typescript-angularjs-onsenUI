
module CordovaOnsen.Utils {
    export class HttpTransfer {
        private authManager: CordovaOnsen.Utils.AuthManager;
        constructor(private $http: ng.IHttpService) {
            $.support.cors = true;
            this.authManager = new CordovaOnsen.Utils.AuthManager();
        }

        private putTransfer(isShowLoadingBar: boolean, url: string, sendData: any, successCallbackFn?: Function, errorCallbackFn?: Function) {

            var token = this.authManager.getAuthToken();
            if (token == null) {
                var param = encodeURIComponent(window.location.href);
                var authUrl = "/cashview/web/#/Login/?callback=" + param;
                window.location.href = authUrl;
            }

            this.$http.put(url, sendData, {
                headers: {
                    Authorization: token
                }
            }).success((data, status, headers, config) => {
                    if (successCallbackFn) {
                        successCallbackFn(data);
                    }
                }).error((data, status, headers, config) => {
                    if (status == 401) {
                        var param = encodeURIComponent(window.location.href);
                        //var authUrl = "/authorization/home/login/?callback=" + param;
                        var authUrl = "/cashview/web/#/Login/?callback=" + param;
                        window.location.href = authUrl;

                    }

                    if (errorCallbackFn) {
                        errorCallbackFn(data);
                    }
                })
                .then(() => {
                });
        }

        private postTransfer(isShowLoadingBar: boolean, url: string, sendData: any, successCallbackFn?: Function, errorCallbackFn?: Function) {

            var token = this.authManager.getAuthToken();
            if (token == null) {
                var param = encodeURIComponent(window.location.href);
                var authUrl = "/cashview/web/#/Login/?callback=" + param;
                window.location.href = authUrl;
            }

            
            this.$http.post(url, sendData, {
                headers: {
                    Authorization: token
                }
            }).success((data, status, headers, config) => {
                    if (successCallbackFn) {
                        successCallbackFn(data);
                    }
            }).error((data, status, headers, config) => {
                    if (status == 401) {
                        var param = encodeURIComponent(window.location.href);
                        //var authUrl = "/authorization/home/login/?callback=" + param;
                        var authUrl = "/cashview/web/#/Login/?callback=" + param;
                        window.location.href = authUrl;

                    }
                    
                    if (errorCallbackFn) {
                        errorCallbackFn(data);
                    }
                })
                .then(() => {
                });
        }

        private getTransfer(isShowLoadingBar: boolean, url: string, successCallbackFn?: Function, errorCallbackFn?: Function) {
            var token = this.authManager.getAuthToken();
            if (token == null) {
                var param = encodeURIComponent(window.location.href);
                var authUrl = "/cashview/web/#/Login/?callback=" + param;
                window.location.href = authUrl;
            }

            this.$http.get(url, {
                headers: {
                    Authorization: token
                }
            }).success((data, status, headers, config) => {
                    if (successCallbackFn) {
                        successCallbackFn(data);
                    }
            }).error((data, status, headers, config) => {
                
                if (status == 401) {
                    var param = encodeURIComponent(window.location.href);
                    //var authUrl = "/authorization/home/login/?callback=" + param;
                    var authUrl = "/cashview/web/#/Login/?callback=" + param;
                    window.location.href = authUrl;

                }
                    if (errorCallbackFn) {
                        errorCallbackFn(data);
                    }
            }).then(() => {
                
                });
        }
        private deleteTransfer(isShowLoadingBar: boolean, url: string, successCallbackFn?: Function, errorCallbackFn?: Function) {
            var token = this.authManager.getAuthToken();
            if (token == null) {
                var param = encodeURIComponent(window.location.href);
                var authUrl = "/cashview/web/#/Login/?callback=" + param;
                window.location.href = authUrl;
            }

            this.$http.delete(url, {
                headers: {
                    Authorization: token
                }
            }).success((data, status, headers, config) => {
                    if (successCallbackFn) {
                        successCallbackFn(data);
                    }
                }).error((data, status, headers, config) => {
                    
                    if (status == 401) {
                        var param = encodeURIComponent(window.location.href);
                        //var authUrl = "/authorization/home/login/?callback=" + param;
                        var authUrl = "/cashview/web/#/Login/?callback=" + param;
                        window.location.href = authUrl;

                    }
                    if (errorCallbackFn) {
                        errorCallbackFn(data);
                    }
                }).then(() => {
                    
                });
        }

        public experienceTemplateLoad(pageId: string, successCallbackFn?: Function, errorCallbackFn?: Function) {
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("pagetemplate?id=" + pageId);
            this.getTransfer(false,url, successCallbackFn, errorCallbackFn);
        }

        public experienceTemplateSave(pageId: string, data: any, successCallbackFn?: Function, errorCallbackFn?: Function) {
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("pagetemplate?id=" + pageId);
            this.postTransfer(false, url, data, successCallbackFn, errorCallbackFn);
        }

        private uploadTransferBom(formdata: any, isProduction: boolean, successCallbackFn?: Function, errorCallbackFn?: Function) {
            var token = this.authManager.getAuthToken();
            if (token == null) {
                var param = encodeURIComponent(window.location.href);
                var authUrl = "/cashview/web/#/Login/?callback=" + param;
                window.location.href = authUrl;
            }
            
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("productionbase/bom/excel?IsProduction=" + isProduction );
            $.ajax({
                url: url,
                headers: {
                    Authorization: token
                },
                type: 'POST',
                data: formdata,
                contentType: false,
                cache: false,
                processData: false,
                success: function (data, textStatus, jqXHR) {
                    if (successCallbackFn) {
                        successCallbackFn(data);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    if (textStatus == "401") {
                        var param = encodeURIComponent(window.location.href);
                        //var authUrl = "/authorization/home/login/?callback=" + param;
                        var authUrl = "/cashview/web/#/Login/?callback=" + param;
                        window.location.href = authUrl;

                    } else {
                        if (errorCallbackFn) {
                            errorCallbackFn(jqXHR);
                        }
                    }
                },
                
            });
        }
        private uploadTransferCustomer(formdata: any, successCallbackFn?: Function, errorCallbackFn?: Function) {
            var token = this.authManager.getAuthToken();
            if (token == null) {
                var param = encodeURIComponent(window.location.href);
                var authUrl = "/cashview/web/#/Login/?callback=" + param;
                window.location.href = authUrl;
            }

            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("productionbase/customer/excel");
            $.ajax({
                url: url,
                headers: {
                    Authorization: token
                },
                type: 'POST',
                data: formdata,
                contentType: false,
                cache: false,
                processData: false,
                success: function (data, textStatus, jqXHR) {
                    if (successCallbackFn) {
                        successCallbackFn(data);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    if (textStatus == "401") {
                        var param = encodeURIComponent(window.location.href);
                        //var authUrl = "/authorization/home/login/?callback=" + param;
                        var authUrl = "/cashview/web/#/Login/?callback=" + param;
                        window.location.href = authUrl;

                    } else {
                        if (errorCallbackFn) {
                            errorCallbackFn(jqXHR);
                        }
                    }
                },
                complete: function () {
                    
                }
            });
        }
        //excel upload
        public uploadBomExcel(data: any, isProduction:boolean, successCallbackFn?: Function, errorCallbackFn?: Function) {
            this.uploadTransferBom(data, isProduction,successCallbackFn, errorCallbackFn);
        }
        public uploadCustomerExcel(data: any, successCallbackFn?: Function, errorCallbackFn?: Function) {
            this.uploadTransferCustomer(data, successCallbackFn, errorCallbackFn);
        }
        //<!--autocomplete-->
        public experienceKeyWordSave(deviceInput: CordovaOnsen.Models.DeviceInput, successCallbackFn?: Function, errorCallbackFn?: Function) {
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("inputs?id=" + deviceInput.deviceId);
            this.postTransfer(false, url, deviceInput, successCallbackFn, errorCallbackFn);
        }

        public experienceKeyWordLoad(id: string, successCallbackFn?: Function, errorCallbackFn?: Function) {
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("inputs?id=" + id);
            this.getTransfer(false,url, successCallbackFn, errorCallbackFn);
        }
        //<!--/autocomplete-->

        //<!--BOM-->
        public saveBom(data: CordovaOnsen.Models.BomSaveModel, successCallbackFn?: Function, errorCallbackFn?: Function) {
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("productionbase/bom");
            this.postTransfer(true, url, data, successCallbackFn, errorCallbackFn);
        }

        public modifyBom(data: CordovaOnsen.Models.BomSaveModel, successCallbackFn?: Function, errorCallbackFn?: Function) {
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("productionbase/bom");
            this.putTransfer(true, url, data, successCallbackFn, errorCallbackFn);
        }

        public getBom(id: number, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //Bom 한개 받아오기
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("productionbase/bom?$filter=EntityId+eq+" + id);
            this.getTransfer(true, url, successCallbackFn, errorCallbackFn);
        }

        public removeBom(data: Array<CordovaOnsen.Models.CommonRemove>, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //BOM 삭제
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("productionbase/bom?ids=" + data[0].EntityId);
            this.deleteTransfer(true, url, successCallbackFn, errorCallbackFn);
        }
        //<!--/BOM-->

        public saveDeliveryPlan(data: Array<CordovaOnsen.Models.DeliveryPlanCreateModel>, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //주문 - 납품계획 등록
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("sales/deliveryplan");
            this.postTransfer(true, url, data, successCallbackFn, errorCallbackFn);
        }

        public getDeliveryPlan(id: number, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //주문 - 한개받아오기
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("sales/deliveryplan/list?$filter=DeliveryPlanId+eq+" + id);
            this.getTransfer(true, url, successCallbackFn, errorCallbackFn);
        }
        public modifyDeliveryPlan(data: Array<CordovaOnsen.Models.DeliveryPlanCreateModel>, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //주문 - 수정
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("sales/deliveryplan/" + data[0].PlanId);
            this.putTransfer(true, url, data, successCallbackFn, errorCallbackFn);
        }
        public cancelDeliveryPlan(data: Array<CordovaOnsen.Models.CommonRemove>, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //주문 취소
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("sales/deliveryplan?ids=" + data[0].EntityId);
            this.deleteTransfer(true, url, successCallbackFn, errorCallbackFn);
        }

        public completeDeliveryPlan(id: number, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //주문완료
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("sales/deliveryplan/complete?deliveryPlanId=" + id);
            this.postTransfer(true, url, {}, successCallbackFn, errorCallbackFn);
        }

        public saveDeliveryOrder(data: Array<CordovaOnsen.Models.DeliveryRelease>, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //납품 등록
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("sales/delivery");
            this.postTransfer(true, url, data, successCallbackFn, errorCallbackFn);
        }
        public saveDeliveryEarn(data: Array<CordovaOnsen.Models.DeliveryEarn>, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //납품 수금
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("sales/delivery/earn");
            this.postTransfer(true, url, data, successCallbackFn, errorCallbackFn);
        }
        public savePurchaseOrder(data: Array<CordovaOnsen.Models.OrderCreateModel>, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //발주 등록
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("production/purchaseorder");
            this.postTransfer(true, url, data, successCallbackFn, errorCallbackFn);
        }

        public loadStoreReleases(successCallbackFn?: Function, errorCallbackFn?: Function) {
            //입출고내역
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("stock/storerelease");
            this.getTransfer(true, url, successCallbackFn, errorCallbackFn);
        }

        public purchaseOrder(data: Array<CordovaOnsen.Models.CommonRemove>, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //발주취소
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("production/purchaseorder?ids=" + data[0].EntityId);
            this.deleteTransfer(true, url, successCallbackFn, errorCallbackFn);
        }

        public saveProductionResult(data: Array<CordovaOnsen.Models.ProductionOutputStock>, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //생산 실적 등록
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("production/output/productstock");
            this.postTransfer(true, url, data, successCallbackFn, errorCallbackFn);
        }

        public getCustomer(id: number, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //업체정보 한개 받아오기
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("productionbase/customer?$filter=EntityId+eq+" + id);
            this.getTransfer(true, url, successCallbackFn, errorCallbackFn);
        }
        public saveCustomer(data: Array<CordovaOnsen.Models.Customer>, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //업체 등록
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("productionbase/customer");
            this.postTransfer(true, url, data, successCallbackFn, errorCallbackFn);
        }
        public modifyCustomer(data: Array<CordovaOnsen.Models.Customer>, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //업체 수정 등록
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("productionbase/customer");
            this.putTransfer(true, url, data, successCallbackFn, errorCallbackFn);
        }
        public removeCustomer(data: Array<CordovaOnsen.Models.CommonRemove>, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //업체 삭제
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("productionbase/customer?ids=" + data[0].EntityId);
            this.deleteTransfer(true, url, successCallbackFn, errorCallbackFn);
        }
        //<!--지출계획-->
        public savePaymentPlan(data: Array<CordovaOnsen.Models.PaymentPlan>, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //지출 계획 등록
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("accounts/paymentplan");
            this.postTransfer(true, url, data, successCallbackFn, errorCallbackFn);
        }
        public getPaymentPlan(id: number, successCallbackFn?: Function, errorCallbackFn?: Function) {
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("accounts/paymentplan?$filter=PaymentPlanId+eq+" + id);
            this.getTransfer(true, url, successCallbackFn, errorCallbackFn);
        }
        public modifyPaymentPlan(data: Array<CordovaOnsen.Models.PaymentPlan>, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //지출 계획 수정
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("accounts/paymentplan");
            this.putTransfer(true, url, data, successCallbackFn, errorCallbackFn);
        }
        public removePaymentPlan(data: Array<CordovaOnsen.Models.CommonRemove>, successCallbackFn?: Function, errorCallbackFn?: Function) {
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("accounts/paymentplan?ids=" + data[0].EntityId);
            this.deleteTransfer(true, url, successCallbackFn, errorCallbackFn);
        }
        //<!--/지출계획-->

        //<!--지출-->
        public savePayment(data: Array<CordovaOnsen.Models.Payment>, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //지출 등록
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("accounts/payment");
            this.postTransfer(true, url, data, successCallbackFn, errorCallbackFn);
        }
        public getPayment(id: number, successCallbackFn?: Function, errorCallbackFn?: Function) {
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("accounts/payment?$filter=PaymentId+eq+" + id);
            this.getTransfer(true, url, successCallbackFn, errorCallbackFn);
        }
        public modifyPayment(data: Array<CordovaOnsen.Models.Payment>, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //지출 수정
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("accounts/payment");
            this.putTransfer(true, url, data, successCallbackFn, errorCallbackFn);
        }
        public removePayment(data: Array<CordovaOnsen.Models.CommonRemove>, successCallbackFn?: Function, errorCallbackFn?: Function) {
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("accounts/payment?ids=" + data[0].EntityId);
            this.deleteTransfer(true, url,  successCallbackFn, errorCallbackFn);
        }
        //<!--/지출-->

        public saveStockMove(data: Array<CordovaOnsen.Models.Stock>, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //창고이동
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("stock/move/outin");
            this.postTransfer(true, url, data, successCallbackFn, errorCallbackFn);
        }

        public saveStoreStockIncomming(data: Array<CordovaOnsen.Models.IncommingStock>, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //입고
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("stock/incommingstock");
            this.postTransfer(true, url, data, successCallbackFn, errorCallbackFn);
        }

        public saveWorker(data: Array<CordovaOnsen.Models.WorkerSaveModel>, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //직원등록
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("reference/worker");
            this.postTransfer(true, url, data, successCallbackFn, errorCallbackFn);
        }

        public modifyWorker(data: Array<CordovaOnsen.Models.WorkerSaveModel>, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //직원 수정
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("reference/worker");
            this.putTransfer(true, url, data, successCallbackFn, errorCallbackFn);
        }

        public removeWorker(data: Array<CordovaOnsen.Models.CommonRemove>, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //직원삭제
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("reference/worker?ids=" + data[0].EntityId);
            this.deleteTransfer(true, url,  successCallbackFn, errorCallbackFn);
        }

        public getWorker(id: number, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //작업자 한개 받아오기
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("reference/worker?$filter=EntityId+eq+" + id);
            this.getTransfer(true, url, successCallbackFn, errorCallbackFn);
        }

        public removeStorage(data: Array<CordovaOnsen.Models.CommonRemove>, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //창고 삭제
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("stock/storage?ids=" + data[0].EntityId);
            this.deleteTransfer(true, url, successCallbackFn, errorCallbackFn);
        }

        public saveStorage(data: Array<CordovaOnsen.Models.StorageSave>, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //창고 추가
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("stock/storage");
            this.postTransfer(true, url, data, successCallbackFn, errorCallbackFn);
        }

        public modifyStorage(data: Array<CordovaOnsen.Models.StorageSave>, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //창고 수정
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("stock/storage");
            this.putTransfer(true, url, data, successCallbackFn, errorCallbackFn);
        }

        public getStorage(id: number, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //창고 한개 받아오기
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("stock/storage?$filter=EntityId+eq+" + id);
            this.getTransfer(true, url, successCallbackFn, errorCallbackFn);
        }

        // <!--상황판 데이터-->
        public loadBulletinBoardBusiness(date: string, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //매출
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("sales/view?date=" + date);
            this.getTransfer(false, url, successCallbackFn, errorCallbackFn);
        }
        public loadBulletinBoardAccount(date: string, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //현금
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("accounts/view?date=" + date);
            this.getTransfer(true, url, successCallbackFn, errorCallbackFn);
        }
        public loadBulletinBoardProduction(date: string, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //생산
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("production/view?date=" + date);
            this.getTransfer(false, url, successCallbackFn, errorCallbackFn);
        }
        public refreshBulletinBoardProduction(successCallbackFn?: Function, errorCallbackFn?: Function) {
            //재계산
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("production/refresh");
            this.getTransfer(true, url, successCallbackFn, errorCallbackFn);
        }
        public loadBulletinBoardBalances(date: string, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //잔고
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("accounts/balance?date=" + date);
            this.getTransfer(false, url, successCallbackFn, errorCallbackFn);
        }
        public getGainGainloss(date: string, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //수익
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("sales/gainLoss?date=" + date);
            this.getTransfer(false, url, successCallbackFn, errorCallbackFn);
        }
        // <!--/상황판 데이터-->

        // <!--수입-->
        public saveProfit(data: Array<CordovaOnsen.Models.Profit>, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //수입 추가
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("accounts/profit");
            this.postTransfer(true, url, data, successCallbackFn, errorCallbackFn);
        }
        public modifyProfit(data: Array<CordovaOnsen.Models.Profit>, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //수입 수정
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("accounts/profit");
            this.putTransfer(true, url, data, successCallbackFn, errorCallbackFn);
        }
        public getProfit(id: number, successCallbackFn?: Function, errorCallbackFn?: Function) {
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("accounts/profit?$filter=EntityId+eq+" + id);
            this.getTransfer(true, url, successCallbackFn, errorCallbackFn);
        }
        public removeProfit(data: Array<CordovaOnsen.Models.CommonRemove>, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //수입 삭제
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("accounts/profit?ids=" + data[0].EntityId);
            this.deleteTransfer(true, url, successCallbackFn, errorCallbackFn);
        }
        // <!--/수입-->

        //<!--서버에서 백그라운드로 동작하는 로직이 있는지 확인-->
        public getBackgroundState(successCallbackFn?: Function, errorCallbackFn?: Function) {
            successCallbackFn();
        }
    }
}