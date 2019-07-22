$(document).ready(function() {
    // ================铝腾建材产品中心展示页=================
    //给第一项添加选中样式，作为初始展示列表
    $("li.products_list_show_mid_" + 1 + " a").addClass("products_list_show_active");
    $("table.products_list_show_mid_" + 1).show();
    for (let i = 1; i < $("#products_list_show li").length + 1; ++ i) {
    //遍历所有项，添加监听事件
    $("#products_list_show li.products_list_show_mid_" + i).mouseover(function () {
            //当鼠标悬浮时
            $("table.products_list_show_mid_" + i).show(); //显示相应的产品列表
            $("li.products_list_show_mid_" + i + " a").addClass("products_list_show_active");//添加当前选中项样式
            for (let j = 1; j < $("#products_list_show li").length + 1; ++ j) { //对未选中项进行设置
                if (j == i) {
                    continue;
                }
                else {
                    $("table.products_list_show_mid_" + j).hide();
                    $("li.products_list_show_mid_" + j + " a").removeClass("products_list_show_active");
                }

            }
        });
    }
    // ================END铝腾建材产品中心展示页=================

    // ================铝腾建材工程案例展示页=================
    var projLength = $("li>a.products_project_exam_item").length;//工程案例分类总数
    var proj = document.querySelectorAll("li>a.products_project_exam_item");
    console.log(proj[0]);
    var proj_content = document.querySelectorAll("div.products_project_exam_item");
    for (let i = 0; i < projLength; ++ i) {
        proj[i].onmouseover = function() {
            proj_content[i].style.display = "block";
            proj[i].style.background = "white";
            proj[i].style.color = "rgb(206, 47, 54)";
            for (let j = 0; j < projLength; ++ j) {
                if (j == i) {
                    continue;
                }
                else {
                    proj[j].style.background = "linear-gradient(to bottom, rgb(206, 47, 54), rgb(163, 29, 30))";
                    proj[j].style.color = "white";
                    proj_content[j].style.display = "none";
                }
            }
        }
    }
    // ================END铝腾建材工程案例展示页=================
}); 