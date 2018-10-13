---
title: alphaNumeric
description: Alpha Numeric validation decorator will allow only alphabets and numbers to be entered. It will not allow any special character. If user tries to do so the property will become invalid. To use the alphaNumeric decorator on particular property.
author: rxcontributortwo

---
# When to use
Let’s assume that you are creating a Location form, which contains fields like AreaName, FlatAddress, PostalAddress, CityCode and you want the user to enter only alphabets and numbers. Here depending upon the requirement these scenarios may arise.
1.	Allow only alphabets and numbers in AreaName without space.
2.	Allowing WhiteSpace in FlatAddress.
3.	Apply alphaNumeric validation based on matched condition in the form, like if the AreaName is `Boston` then the CityCode value should be in alphabets and numbers.
4.	Adding Custom Message on PostalAddress Field.
5.	Apply dynamic validation, If the validation will be changed based on some criteria in the application.

Let’s see how alphaNumeric validator fulfil the need.

# Basic AlphaNumeric Validation
First we need to create a Location class and define a property of AreaName in the model to achieve the functional need of point 1.
[!code-typescript[](\assets\examples\alphaNumeric\add\location.model.ts?condition="tab_1=='basicadd'"&type=section)]
[!code-typescript[](\assets\examples\alphaNumeric\edit\location.model.ts?condition="tab_1=='basicedit'"&type=section)]

Now, we need to create a FormGroup in the component. To achieve this, we need to add RxFormBuilder. The RxFormBuilder is an injectable service that is provided with the RxReactiveFormsModule. Inject this dependency by adding it to the component constructor.

[!TabGroup]
# [Add](#tab\basicadd)
[!code-typescript[](\assets\examples\alphaNumeric\add\alpha-numeric-add.component.ts)]
# [Edit](#tab\basicedit)
[!code-typescript[](\assets\examples\alphaNumeric\edit\alpha-numeric-edit.component.ts)]
***

Next, we need to write html code.
[!code-typescript[](\assets\examples\alphaNumeric\add\alpha-numeric-add.component.html?condition="tab_1=='basicadd'"&type=section)]
[!code-typescript[](\assets\examples\alphaNumeric\edit\alpha-numeric-edit.component.html?condition="tab_1=='basicedit'"&type=section)]

[!example(?condition="tab_1=='basicadd'"&type=tab)]
<app-alphaNumeric-add></app-alphaNumeric-add>

[!example(?condition="tab_1=='basicedit'"&type=tab)]
<app-alphaNumeric-edit></app-alphaNumeric-edit>

# AlphaConfig 
Below options are not mandatory to use in the `@alphaNumeric()` decorator. If needed then use the below options.

|Option | Description |
|--- | ---- |
|[allowWhiteSpace](#allowwhitespace) | This will allow whitespace in particular control property.The default value is `false`. |
|[conditionalExpression](#conditionalexpressions) | AlphaNumeric validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work as same as client function. |
|[message](#message) | To override the global configuration message and show the custom message on particular control property. |

## allowWhiteSpace 
Type :  `boolean` 

This will allow whitespace in particular control property.The default value is `false`.

[!TabGroup(?showHideCondition="allowWhiteSpaceShow")]
# [Model](#tab\allowWhiteSpacemodel)
[!code-typescript[](\assets\examples\alphaNumeric\allowWhiteSpace\location.model.ts)]
# [Component](#tab\allowWhiteSpaceComponent)
[!code-typescript[](\assets\examples\alphaNumeric\allowWhiteSpace\alpha-numeric-allow-white-space.component.ts)]
# [Html](#tab\allowWhiteSpaceHtml)
[!code-typescript[](\assets\examples\alphaNumeric\allowWhiteSpace\alpha-numeric-allow-white-space.component.html)]
***

[!example(?type=section&clickEventCode="allowWhiteSpaceShow=!allowWhiteSpaceShow"&title=alphaNumeric decorator with allowWhiteSpace)]
<app-alphaNumeric-allowWhiteSpace></app-alphaNumeric-allowWhiteSpace>

## conditionalExpression 
Type :  `Function`  |  `string` 

AlphaNumeric validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.
If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work as same as client function.

[!TabGroup(?showHideCondition="conditionalExpression")]
# [Model](#tab\conditionalExpressionmodel)
[!code-typescript[](\assets\examples\alphaNumeric\conditionalExpression\location.model.ts)]
# [Component](#tab\conditionalExpressionComponent)
[!code-typescript[](\assets\examples\alphaNumeric\conditionalExpression\alpha-numeric-conditional-expressions.component.ts)]
# [Html](#tab\conditionalExpressionHtml)
[!code-typescript[](\assets\examples\alphaNumeric\conditionalExpression\alpha-numeric-conditional-expressions.component.html)]
***

[!example(?type=section&clickEventCode="conditionalExpression=!conditionalExpression"&title=alphaNumeric decorator with conditionalExpression)]
<app-alphaNumeric-conditionalExpression></app-alphaNumeric-conditionalExpression>

## message 
Type :  `string` 

To override the global configuration message and show the custom message on particular control property.
 
[!TabGroup(?showHideCondition="message")]
# [Model](#tab\messageModel)
[!code-typescript[](\assets\examples\alphaNumeric\message\location.model.ts)]
# [Component](#tab\messageComponent)
[!code-typescript[](\assets\examples\alphaNumeric\message\alpha-numeric-message.component.ts)]
# [Html](#tab\messageHtml)
[!code-typescript[](\assets\examples\alphaNumeric\message\alpha-numeric-message.component.html)]
***

[!example(?type=section&clickEventCode="message=!message"&title=alphaNumeric decorator with custom message)]
<app-alphaNumeric-message></app-alphaNumeric-message>

# Complete AlphaNumeric Example
[!TabGroup]
# [Example](#tab\completeexample)
<app-alphaNumeric-complete></app-alphaNumeric-complete>
# [Model](#tab\completemodel)
[!code-typescript[](\assets\examples\alphaNumeric\complete\location.model.ts)]
# [Component](#tab\completecomponent)
[!code-typescript[](\assets\examples\alphaNumeric\complete\alpha-numeric-complete.component.ts)]
# [Html](#tab\completehtml)
[!code-typescript[](\assets\examples\alphaNumeric\complete\alpha-numeric-complete.component.html)]
***




