import { Request, Response } from 'express';
import { DataManagerRequest, ProductDetails } from '../types/interface';
import { productDetails } from '../utils/data';

export const getProducts = (req: Request, res: Response) => {
  try {
    const dm: DataManagerRequest = req.body || {};

    let result = [...productDetails];
    const count = result.length;

    const skip = Number.isFinite(dm.skip as number) ? Number(dm.skip ?? 0) : 0;
    const take = Number.isFinite(dm.take as number) ? Number(dm.take ?? count) : count;

    result = result.slice(skip, skip + take);

    res.json(dm.requiresCounts ? { result, count } : result);
  } catch (error) {
    res.status(500).json({
      error: 'Failed to retrieve products',
      result: [],
      count: 0
    });
  }
};

export const createProduct = (req: Request, res: Response) => {
  try {
    const updatedRecord = req.body.value || req.body;
    const productID = updatedRecord.ProductID ?? updatedRecord.productID;

    const newId = productID ? productID : Math.max(0, ...productDetails.map((p) => p.ProductID ?? 0)) + 1;
    const newProduct: ProductDetails = {
      ProductID: newId,
      ProductName: updatedRecord.ProductName ?? updatedRecord.productName,
      Category: updatedRecord.Category ?? updatedRecord.category,
      MRP: Number(updatedRecord.MRP ?? 0),
      Discount: Number(updatedRecord.Discount ?? 0),
    };

    productDetails.push(newProduct);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(422).json({
      message: 'Insert failed: ' + (error instanceof Error ? error.message : String(error))
    });
  }
};

export const updateProduct = (req: Request, res: Response) => {
  try {
    const updatedData = req.body.value || req.body;
    const id = req.params.id ?? req.body.key ?? updatedData.ProductID ?? updatedData.productId;
    const productId = Number(id);

    if (!Number.isFinite(productId)) {
      return res.status(422).json({ message: 'Missing ProductID' });
    }

    const index = productDetails.findIndex((p) => p.ProductID === productId);
    if (index === -1) {
      return res.status(404).json({ error: 'Product not found' });
    }

    productDetails[index] = { ...productDetails[index], ...updatedData, ProductID: productId };
    res.json(productDetails[index]);
  } catch (error) {
    res.status(422).json({ message: 'Update failed: ' + (error instanceof Error ? error.message : String(error)) });
  }
};

export const deleteProduct = (req: Request, res: Response) => {
  try {
    const id = req.params.id ?? req.body.key;
    const productId = Number(id);

    if (!Number.isFinite(productId)) {
      return res.status(422).json({
        message: 'Missing ProductID'
      });
    }

    const index = productDetails.findIndex((p) => p.ProductID === productId);
    if (index === -1) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const deleted = productDetails[index];
    productDetails.splice(index, 1);
    res.status(200).json({
      message: 'Product deleted',
      deleted
    });
  } catch (error) {
    res.status(422).json({
      message: 'Delete failed: ' + (error instanceof Error ? error.message : String(error))
    });
  }
};