/*
Detects when the game object of the coins is triggered

Author: Santiago Tena & Domingo Mora
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BallIn : MonoBehaviour
{
    [SerializeField] Score scoreObj;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    //Detect two elements colliding or in contact
    void OnTriggerEnter2D()
    {
        scoreObj.AddPoints(1);
    }
}
