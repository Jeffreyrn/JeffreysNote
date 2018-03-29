## 图像文件处理步骤
- 获取 input[type="file"] 控件上的图像文件对象；
- 使用 window.URL/FileReader 获取图像路径（BlobURL/DataURL）并通过 Image 对象载入；
- 通过载入图像的 Image 对象绘制到 canvas 画布上；
- 通过 canvas.toDataURL 方法将画布图像压缩并输出 base-64 编码的 dataURL 字符串；
- 通过 window.atob 将 base-64 字符串解码为 binaryString（二进制文本）；
- 将 binaryString 构造为 multipart/form-data 格式；
- 用 Uint8Array 将 multipart 格式的二进制文本转换为 ArrayBuffer。

- **url-loader 可以自动根据文件大小决定要不要做成内联 base64**

## ref

<https://sebastianblade.com/browser-side-image-compress-and-upload/>